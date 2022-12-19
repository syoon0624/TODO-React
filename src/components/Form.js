import React from 'react';

export default function Form({ handleSubmit, value, setValue }) {
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <form style={{ display: 'flex' }} onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        className="w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow"
        placeholder="해야 할 일을 입력해 주세요."
        value={value}
        onChange={(e) => handleChange(e)}
      />
      <input
        type="submit"
        value="입력"
        className="p-2 text-blue-400 border-2 border-blue-400 rounded hover:text-white hover:bg-blue-200"
        style={{ flex: '1' }}
      />
    </form>
  );
}
