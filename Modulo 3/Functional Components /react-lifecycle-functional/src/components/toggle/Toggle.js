import React from 'react';

export default function Toggle({ onToggle, enabled, description }) {
  const handleChanges = (event) => {
    const isChecked = event.target.checked;
    onToggle(isChecked);
  };
  return (
    <div className="switch">
      <label>
        {description}
        <input type="checkbox" checked={enabled} onChange={handleChanges} />
        {/* onChanges troca de valor. */}
        <span className="lever"></span>
      </label>
    </div>
  );
}
