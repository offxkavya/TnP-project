import React, { useEffect, useRef } from 'react';

interface LineChartProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor: string;
      backgroundColor: string;
    }[];
  };
}

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;
    
    const { width, height } = canvasRef.current;
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Set up chart dimensions
    const padding = 40;
    const chartWidth = width - padding * 2;
    const chartHeight = height - padding * 2;
    
    // Find max value for scaling
    const maxValue = Math.max(...data.datasets.flatMap(dataset => dataset.data)) * 1.1;
    
    // Draw axes
    ctx.beginPath();
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 1;
    
    // Y-axis
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, height - padding);
    
    // X-axis
    ctx.moveTo(padding, height - padding);
    ctx.lineTo(width - padding, height - padding);
    ctx.stroke();
    
    // Draw grid lines
    const gridLines = 5;
    ctx.beginPath();
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 0.5;
    
    for (let i = 1; i <= gridLines; i++) {
      const y = padding + (chartHeight / gridLines) * i;
      ctx.moveTo(padding, height - y);
      ctx.lineTo(width - padding, height - y);
    }
    ctx.stroke();
    
    // Draw labels
    ctx.fillStyle = '#64748b';
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'center';
    
    // X-axis labels
    const xStep = chartWidth / (data.labels.length - 1);
    data.labels.forEach((label, i) => {
      const x = padding + xStep * i;
      ctx.fillText(label, x, height - padding + 20);
    });
    
    // Y-axis labels
    ctx.textAlign = 'right';
    for (let i = 0; i <= gridLines; i++) {
      const value = maxValue * (i / gridLines);
      const y = height - padding - (chartHeight / gridLines) * i;
      ctx.fillText(value.toFixed(1) + '%', padding - 10, y + 4);
    }
    
    // Plot data points and lines
    data.datasets.forEach(dataset => {
      ctx.strokeStyle = dataset.borderColor;
      ctx.fillStyle = dataset.backgroundColor;
      ctx.lineWidth = 3;
      ctx.lineJoin = 'round';
      
      ctx.beginPath();
      
      // Create animation effect with setTimeout
      const animationPoints: {x: number, y: number}[] = [];
      
      dataset.data.forEach((value, i) => {
        const x = padding + xStep * i;
        const normalizedValue = value / maxValue;
        const y = height - padding - chartHeight * normalizedValue;
        animationPoints.push({x, y});
      });
      
      // Animation for line drawing
      let step = 0;
      const totalSteps = 30;
      const drawStep = () => {
        if (step > totalSteps) return;
        
        ctx.clearRect(0, 0, width, height);
        
        // Redraw axes
        ctx.beginPath();
        ctx.strokeStyle = '#e2e8f0';
        ctx.lineWidth = 1;
        ctx.moveTo(padding, padding);
        ctx.lineTo(padding, height - padding);
        ctx.moveTo(padding, height - padding);
        ctx.lineTo(width - padding, height - padding);
        ctx.stroke();
        
        // Redraw grid lines
        ctx.beginPath();
        ctx.strokeStyle = '#e2e8f0';
        ctx.lineWidth = 0.5;
        for (let i = 1; i <= gridLines; i++) {
          const y = padding + (chartHeight / gridLines) * i;
          ctx.moveTo(padding, height - y);
          ctx.lineTo(width - padding, height - y);
        }
        ctx.stroke();
        
        // Redraw labels
        ctx.fillStyle = '#64748b';
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'center';
        data.labels.forEach((label, i) => {
          const x = padding + xStep * i;
          ctx.fillText(label, x, height - padding + 20);
        });
        ctx.textAlign = 'right';
        for (let i = 0; i <= gridLines; i++) {
          const value = maxValue * (i / gridLines);
          const y = height - padding - (chartHeight / gridLines) * i;
          ctx.fillText(value.toFixed(1) + '%', padding - 10, y + 4);
        }
        
        // Draw line up to current step
        ctx.beginPath();
        ctx.strokeStyle = dataset.borderColor;
        ctx.lineWidth = 3;
        
        const progress = step / totalSteps;
        const pointsToShow = Math.ceil(animationPoints.length * progress);
        
        for (let i = 0; i < pointsToShow; i++) {
          const {x, y} = animationPoints[i];
          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
          
          // Draw points
          ctx.fillStyle = '#fff';
          ctx.beginPath();
          ctx.arc(x, y, 5, 0, Math.PI * 2);
          ctx.fill();
          ctx.strokeStyle = dataset.borderColor;
          ctx.lineWidth = 2;
          ctx.stroke();
        }
        
        ctx.stroke();
        
        step++;
        requestAnimationFrame(drawStep);
      };
      
      drawStep();
    });
    
  }, [data]);
  
  return (
    <canvas 
      ref={canvasRef} 
      width="600" 
      height="300"
      className="w-full h-full"
    />
  );
};

export default LineChart;