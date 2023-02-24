import React from 'react';

interface Props {
  infos: (string | number)[];
  defaultValue: string;
  type: string;
  register: any;
}

const InfoSelect = ({ infos, defaultValue, type, register }: Props) => {
  const findDefaultValue = () => {
    const index = infos?.findIndex((item) => item == defaultValue);
    if (index !== -1) {
      infos.splice(index, 1);
    }
  };

  findDefaultValue();

  return (
    <select
      {...register(type)}
      className='select w-full text-mw-dGray shadow-default rounded-default font-normal text-base pl-6 mb-8'
    >
      <option value={defaultValue} defaultValue={defaultValue}>
        {defaultValue}
      </option>
      {infos.map((info) => {
        return (
          <option key={info} value={info}>
            {info}
          </option>
        );
      })}
    </select>
  );
};

export default InfoSelect;
