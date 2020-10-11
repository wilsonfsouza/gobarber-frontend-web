import React from 'react';
import { Container } from './styles';

interface TooltipProps {
  title: string;
  className?: string;
}
const Tootip: React.FunctionComponent<TooltipProps> = ({
  title,
  className,
  children,
}) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default Tootip;
