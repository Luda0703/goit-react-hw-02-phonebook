import PropTypes from "prop-types";
import { Ul, Li, Button, P } from './ContactList.styled'

export const ContactList = ({contacts, onDeletContacts}) => {
    return (
        <Ul>
        {contacts.map(({name, number, id}) => (
            <Li key={id}>
               <P>{name}: {number}</P>
               <Button 
               type="button"
               onClick={() => onDeletContacts(id)}
               >Delete
               </Button>
            </Li>
        ))}
        </Ul>
    );
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired
        })
    ).isRequired,
    onDeletContacts: PropTypes.func.isRequired,
}