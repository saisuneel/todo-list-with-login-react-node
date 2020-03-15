import React, {FunctionComponent, FormEvent} from "react";
import {styles} from "./input-group.styles"

interface Props {
    type: string
    name: string
    minLength: number
    autoFocus?: boolean
    value: any
    setValue: (arg: any) => void
}

const InputGroup: FunctionComponent<Props> = (props: Props) => {
    const {type, name, minLength, autoFocus, value, setValue} = props;

    const handleChange = (e: FormEvent) => {
        const target = e.target as HTMLInputElement
        setValue(target.value);
    }

    return (
        <div style={styles.inputGroup}>
            <label style={styles.label}>
                <div style={styles.labelName}>{name}:</div>
                <input
                    value={value}
                    onInput={(e) => handleChange(e)}
                    onChange={(e) => handleChange(e)}
                    type={type}
                    name={name}
                    required
                    autoFocus={autoFocus}
                    minLength={minLength}
                    style={styles.input}
                />
            </label>
        </div>
    )
}

export default InputGroup
