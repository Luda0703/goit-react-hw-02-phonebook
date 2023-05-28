import PropTypes from "prop-types";
import { Div, Label, Input } from "./Filter.styled";

export const Filter = ({value, onChange}) => {
        return (
            <Div>
                <Label>Find contacts by name
                    <Input
                    type="name"
                    value={value}
                    onChange={onChange}
                    />
                </Label>
            </Div>
        )
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}