function getUniqueTags(posts) {
    const uniqueTagsSet = new Set();
  
    posts.forEach((post) => {
      if (post.published === true) {
        post.tags.forEach((tag) => {
          uniqueTagsSet.add(tag);
        });
      }
    });
  
    return Array.from(uniqueTagsSet);
  }
  
  const TagList = ({ posts }) => {
   
    const uniqueTags = getUniqueTags(posts);
  
   
    return (
      <div>
            <h2 className="font-semibold text-lg text-center mb-5">Lista dei Tag:
                {uniqueTags.map((tag, index) => (
                    <span key={`tag_${index}`}> {tag}</span>
            ))}
        </h2>
      </div>
    );
  };
  
  export default TagList;