import React, { useEffect, useRef } from 'react';

interface PieChartProps {
  data: {
    labels: string[];
    datasets: {
      data: number[];
      backgroundColor: string[];
      borderColor: string[];
    }[];
  };
}

const PieChart: React.FC<PieChartProps> = ({ data }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;
    
    const { width, height } = canvasRef.current;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(centerX, centerY) * 0.7;
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Animation setup
    let currentAngle = 0;
    const targetAngles: number[] = [];
    const dataset = data.datasets[0];
    const total = dataset.data.reduce((sum, value) => sum + value, 0);
    
    dataset.data.forEach(value => {
      const angle = (value / total) * Math.PI * 2;
      targetAngles.push(currentAngle + angle);
      currentAngle += angle;
    });
    
    // Animation frame
    let step = 0;
    const totalSteps = 30;
    
    const drawStep = () => {
      if (step > totalSteps) {
        // Draw legend after animation completes
        drawLegend();
        return;
      }
      
      ctx.clearRect(0, 0, width, height);
      
      const progress = step / totalSteps;
      let startAngle = -Math.PI / 2; // Start from the top (12 o'clock position)
      
      dataset.data.forEach((value, i) => {
        const targetAngle = (value / total) * Math.PI * 2 * progress;
        const endAngle = startAngle + targetAngle;
        
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.closePath();
        
        ctx.fillStyle = dataset.backgroundColor[i];
        ctx.fill();
        
        ctx.strokeStyle = dataset.borderColor[i];
        ctx.lineWidth = 2;
        ctx.stroke();
        
        startAngle = endAngle;
      });
      
      // Draw center circle for donut effect
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 0.5, 0, Math.PI * 2);
      ctx.fillStyle = '#fff';
      ctx.fill();
      
      step++;
      requestAnimationFrame(drawStep);
    };
    
    const drawLegend = () => {
      const legendX = centerX;
      const legendY = height - 20;
      const itemWidth = 120;
      const leftStart = legendX - ((data.labels.length * itemWidth) / 2);
      
      data.labels.forEach((label, i) => {
        const x = leftStart + (i * itemWidth);
        const percentage = ((dataset.data[i] / total) * 100).toFixed(0);
        
        // Draw color box
        ctx.fillStyle = dataset.backgroundColor[i];
        ctx.fillRect(x, legendY, 15, 15);
        
        // Draw label text
        ctx.fillStyle = '#1e293b';
        ctx.font = '14px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText(`${label}: ${percentage}%`, x + 20, legendY + 12);
      });
    };
    
    drawStep();
  }, [data]);
  
  return (
    <canvas 
      ref={canvasRef} 
      width="400" 
      height="400"
      className="w-full h-full"
    />
  );
};

export default PieChart;