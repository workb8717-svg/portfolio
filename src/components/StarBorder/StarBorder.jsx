import React from 'react';
import './StarBorder.css';

const StarBorder = ({
  as: Component = 'button',
  className = '',
  color = '#ffffff',
  speed = '6s',
  thickness = 2,
  backgroundColor = '#000000',
  textColor = '#ffffff',
  borderColor = '#222222',
  children,
  ...rest
}) => {
  return (
    <Component
      className={`star-border-container ${className}`}
      style={{
        padding: `${thickness}px`,
        ...rest.style
      }}
      {...rest}
    >
      <div
        className="border-gradient-bottom"
        style={{
          background: `radial-gradient(circle, ${color} 0%, rgba(255, 255, 255, 0.75) 20%, transparent 75%)`,
          animationDuration: speed
        }}
      ></div>
      <div
        className="border-gradient-top"
        style={{
          background: `radial-gradient(circle, ${color} 0%, rgba(255, 255, 255, 0.75) 20%, transparent 75%)`,
          animationDuration: speed
        }}
      ></div>
      <div 
        className="inner-content" 
        style={{ 
          background: backgroundColor, 
          color: textColor, 
          borderColor 
        }}
      >
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;
