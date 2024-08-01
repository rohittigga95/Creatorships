import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ContactList = () => {
    const [contacts, setContacts] = useState([]);
useEffect(() => {
  //fetch notes from the server
  axios
      .get("http://localhost:4000/api/contacts")
      .then((response) => setContacts(response.data))
      .catch((error) => console.error("Error fetching creators:", error))
}, [])
  return (
    <section className="w-full max-w-7xl py-4 mx-5">
        <div className="flex flex-col space-y-4  md:flex-row md:items-center md:justify-between md:space-y-0">
          <div className='grid '>
            <h2 className="text-lg font-semibold">Contact Data</h2>
            <p className="mt-1 text-sm text-gray-700">
              This is a list of all people who have filled contact from.
            </p>
          </div>
          
        </div>
        
        <div className="mt-6 flex flex-col">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        <span>Details</span>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700 md:px-40"
                      >
                        Message
                      </th>
                    </tr>
                  </thead>
                  
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {contacts.map((contact) => (
                      <tr key={contact.name}>
                        <td className="whitespace-nowrap px-3 py-4">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{contact.fname} {contact.lname}</div>
                              <div className="text-sm text-gray-700">{contact.email}</div>
                              <div className="text-sm text-gray-700">{contact.phone}</div>
                            </div>
                          </div>
                        </td>
                        
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700 md:px-40">
                          
                       <a href={contact.link} target='_blank'> {contact.msg}</a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default ContactList