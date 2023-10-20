import React from 'react';

function Note({ note }) {
  const contentList = note.content ? Object.keys(note.content).map((key) => note.content[key]) : [];
  const uncontentList = note.uncontent ? Object.keys(note.uncontent).map((key) => note.uncontent[key]) : [];

 
  const mergedList = contentList.concat(uncontentList);

  return (
    <div>
      <h6 className='text-center text-black-50 fs-6'>{note.title}</h6>
      <p  className='text-center fw-bold fs-4'><b> ${note.price}/month</b></p>
      <hr />
      <ul className='fw-normal'>
        {mergedList.map((item, index) => (
          <li key={`item-${index}`}>{contentList.includes(item) ? '✓' : '✗'}  <span className={uncontentList.includes(item) ? 'text-black-50' : ''}>
          {item}
        </span></li>
        ))}
      </ul>
      <div class="d-grid gap-2">
      <button className="btn btn-info ">Button</button>
    </div>
    </div>
  );
}

export default Note;
