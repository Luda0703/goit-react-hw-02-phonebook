

export const ContactList = ({contacts, onDeletContacts}) => {
    return (
        <ul>
        {contacts.map(({name, number, id}) => {
            <li key={id}>
               <p>{name}: {number}</p>
               <button 
               type="button"
               onClick={() => onDeletContacts(id)}
               >Delete
               </button>
            </li>
        })}
        </ul>
    );
    // return (
    //     <ul>
    //       {contacts.map(({ name, number, id }) => (
    //         <li key={id}>
    //           <p>
    //             {name}: {number}
    //           </p>
    //           <button type="button" onClick={() => onDeletContacts(id)}>
    //             delete
    //           </button>
    //         </li>
    //       ))}
    //     </ul>
    //   );
}