// @flow

import React from 'react'

type Props = {
  equipments: [{ name: string }]
};

const EquipmentList = ({ equipments }: Props) =>
  <section className="equipment">
    <h5>Equipment</h5>
    <div className="utensil-wrapper">
      {equipments.map(({ name }) =>
        <div key={name} className="utensil-name">{name}</div>,
      )}
    </div>
  </section>

export default EquipmentList
