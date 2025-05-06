import React, { useEffect, useRef } from 'react';

interface BarChartProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string[];
    }[];
  };
  horizontal?: boolean;
}

const BarChart: React.FC<BarChartProps> = ({ data, horizontal = false }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;
    
    const { width, height } = canvasRef.current;
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Set up chart dimensions
    const padding = 60;
    const chartWidth = width - padding * 2;
    const chartHeight = height - padding * 2;
    
    // Find max value for scaling
    const maxValue = Math.max(...data.datasets.flatMap(dataset => dataset.data)) * 1.1;
    
    // Draw axes
    ctx.beginPath();
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 1;
    
    if (horizontal) {
      // Y-axis
      ctx.moveTo(padding, padding);
      ctx.lineTo(padding, height - padding);
      
      // X-axis
      ctx.moveTo(padding, height - padding);
      ctx.lineTo(width - padding, height - padding);
    } else {
      // Y-axis
      ctx.moveTo(padding, height - padding);
      ctx.lineTo(padding, padding);
      
      // X-axis
      ctx.moveTo(padding, height - padding);
      ctx.lineTo(width - padding, height - padding);
    }
    
    ctx.stroke();
    
    // Draw grid lines
    const gridLines = 5;
    ctx.beginPath();
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 0.5;
    
    if (horizontal) {
      for (let i = 1; i <= gridLines; i++) {
        const x = padding + (chartWidth / gridLines) * i;
        ctx.moveTo(x, padding);
        ctx.lineTo(x, height - padding);
      }
    } else {
      for (let i = 1; i <= gridLines; i++) {
        const y = height - padding - (chartHeight / gridLines) * i;
        ctx.moveTo(padding, y);
        ctx.lineTo(width - padding, y);
      }
    }
    
    ctx.stroke();
    
    // Draw labels
    ctx.fillStyle = '#64748b';
    ctx.font = '12px sans-serif';
    
    if (horizontal) {
      // Y-axis labels (categories)
      ctx.textAlign = 'right';
      const barHeight = chartHeight / data.labels.length;
      const barPadding = barHeight * 0.2;
      
      data.labels.forEach((label, i) => {
        const y = padding + barHeight * i + barHeight / 2;
        ctx.fillText(label, padding - 10, y + 4);
      });
      
      // X-axis labels (values)
      ctx.textAlign = 'center';
      for (let i = 0; i <= gridLines; i++) {
        const value = maxValue * (i / gridLines);
        const x = padding + (chartWidth / gridLines) * i;
        ctx.fillText(value.toFixed(0) + '%', x, height - padding + 20);
      }
    } else {
      // X-axis labels (categories)
      ctx.textAlign = 'center';
      const barWidth = chartWidth / data.labels.length;
      
      data.labels.forEach((label, i) => {
        const x = padding + barWidth * i + barWidth / 2;
        ctx.fillText(label, x, height - padding + 20);
      });
      
      // Y-axis labels (values)
      ctx.textAlign = 'right';
      for (let i = 0; i <= gridLines; i++) {
        const value = maxValue * (i / gridLines);
        const y = height - padding - (chartHeight / gridLines) * i;
        ctx.fillText(value.toFixed(0) + '%', padding - 10, y + 4);
      }
    }
    
    // Draw bars with animation
    const dataset = data.datasets[0];
    
    let step = 0;
    const totalSteps = 30;
    
    const drawStep = () => {
      if (step > totalSteps) return;
      
      const progress = step / totalSteps;
      
      // Clear only the chart area, not the axes and labels
      ctx.clearRect(padding + 1, padding, chartWidth, chartHeight);
      
      if (horizontal) {
        const barHeight = chartHeight / data.labels.length;
        const barPadding = barHeight * 0.2;
        
        dataset.data.forEach((value, i) => {
          const normalizedValue = value / maxValue;
          const barLength = chartWidth * normalizedValue * progress;
          const y = padding + barHeight * i + barPadding;
          
          ctx.fillStyle = dataset.backgroundColor[i] || '#3b82f6';
          ctx.fillRect(padding, y, barLength, barHeight - barPadding * 2);
          
          // Add value at the end of the bar
          if (progress > 0.7) {
            ctx.fillStyle = '#1e293b';
            ctx.textAlign = 'left';
            ctx.fillText(value.toFixed(0) + '%', padding + barLength + 5, y + (barHeight - barPadding * 2) / 2 + 4);
          }
        });
      } else {
        const barWidth = chartWidth / data.labels.length;
        const barPadding = barWidth * 0.2;
        
        dataset.data.forEach((value, i) => {
          const normalizedValue = value / maxValue;
          const barHeight = chartHeight * normalizedValue * progress;
          const x = padding + barWidth * i + barPadding;
          
          ctx.fillStyle = dataset.backgroundColor[i] || '#3b82f6';
          ctx.fillRect(x, height - padding - barHeight, barWidth - barPadding * 2, barHeight);
          
          // Add value on top of the bar
          if (progress > 0.7) {
            ctx.fillStyle = '#1e293b';
            ctx.textAlign = 'center';
            ctx.fillText(value.toFixed(0) + '%', x + (barWidth - barPadding * 2) / 2, height - padding - barHeight - 10);
          }
        });
      }
      
      step++;
      requestAnimationFrame(drawStep);
    };
    
    drawStep();
  }, [data, horizontal]);
  
  return (
    <canvas 
      ref={canvasRef} 
      width="600" 
      height="400"
      className="w-full h-full"
    />
  );
};

export default BarChart;