import { useRef, useState } from 'react'
import { Link } from "react-router-dom"
import SplitButton from '../../designSystem/SplitButton'


export default function ClinicSelect({
    initialValue,
    clinics,
    onClick,
}) {
    const options = clinics.map(clinic => clinic?.data)

    const itemRenderer = (option) => (
        <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to={`/schedules/${option?.id}`}
            key={option?.id}
        >
            {option?.name}
        </Link>
    )

    return (
        <SplitButton
            initialValue={initialValue}
            options={options}
            onClick={onClick}
            itemRenderer={itemRenderer}
        />
    )
}