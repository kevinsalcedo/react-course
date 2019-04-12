import React from 'react';
import useResources from './useResources';

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);
  
  return (
    <div>
      <ul>
      {resources.map(post => <li key={post.id}>{post.title}</li>)}
      </ul>
    </div>
  );
}

export default ResourceList;