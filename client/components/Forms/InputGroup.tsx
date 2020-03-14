import React, {CSSProperties, FunctionComponent} from "react";

interface Props {
    type: string
    name: string
    minLength: number
    autoFocus?: boolean
}

const styles = {
    inputGroup: {
        padding: "15px 20px"
    },
    labelName: {
        textTransform: "capitalize",
        marginBottom: "5px",
    } as CSSProperties,
    input: {
        height: "20px",
        padding: "5px 7px",
        borderRadius: "3px",
        border: "1px solid dimgrey"
    } as CSSProperties,
    label: {
        display: "flex",
        flexDirection: "column"
    } as CSSProperties,
}
const InputGroup: FunctionComponent<Props> = (props: Props) => {
    const {type, name, minLength, autoFocus} = props;
    return (
        <div style={styles.inputGroup}>
            <label style={styles.label}>
                <div style={styles.labelName}>{name}:</div>
                <input
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
