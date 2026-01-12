import React from 'react';

export default ({ cn }: { cn: string }) => {
  return (
      <div className={cn}>
          <a href="https://github.com/thaniyell" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/thaniyell" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com/_kvngNath" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
          </a>
      </div>
  );
};
