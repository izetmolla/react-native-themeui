import React, { FC } from 'react';

interface RenderNodeProps {
  component: any;
  content: any;
  defaultProps: any;
}
const renderNode: FC<RenderNodeProps> = ({
  component,
  content,
  defaultProps,
}) => {
  const Component = component;

  if (content == null || content === false) {
    return null;
  }
  if (React.isValidElement(content)) {
    return content;
  }
  if (typeof content === 'function') {
    return content();
  }
  // Just in case
  if (content === true) {
    return <Component {...defaultProps} />;
  }
  if (typeof content === 'string' || typeof content === 'number') {
    return <Component {...defaultProps}> {content} </Component>;
  }
  return <Component {...defaultProps} {...content} />;
};

export default renderNode;
