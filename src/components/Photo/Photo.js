import React from 'react';

import './Photo.css';

function Photo ({ photo }) {
  return (
    <div className="Photo">
      <figure>
        <img src="https://placekitten.com/480/360" alt="Meow"/>
      </figure>

      <div className="Photo__Headline">
        <a>
          <h2 className="Photo__Title">{photo.title || 'Unknown'}</h2>
        </a>
        <span className="Photo__Author">by <a>{photo.ownername}</a></span>
      </div>

      <div className="Photo__Description">
        {photo.description._content}
      </div>

      {!!photo.tags && <PhotoTags tags={photo.tags} />}
    </div>
  );
}

function PhotoTags ({ tags }) {
  return (
    <div className="Photo__Tags">
      {(tags.split('n') || []).map((tag, i) => <span key={`tag_${i}`} className="Photo__Tag">{tag}</span>)}
    </div>
  );
}

export default Photo;