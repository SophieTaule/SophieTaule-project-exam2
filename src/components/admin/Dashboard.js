import React from "react";
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import ContactAdmin from './contact/Contact'
import EnquiresAdmin from './enquiries/Enquiries'
import AddEstablishment from "./addEstablishment/AddEstablishmentForm";

function Dashboard() {
    return (
        <>
            <Tabs className="justify-content-center" defaultActiveKey="/admin/contact">
                <Tab eventKey="/admin/contact" title="Messages">
                    <ContactAdmin />
                </Tab>
                <Tab eventKey="/admin/enquires" title="Enquires">
                    <EnquiresAdmin />
                </Tab>
                <Tab eventKey="/admin/hotels/add" title="+ Add Establishment">
                    <AddEstablishment />
                </Tab>
            </Tabs>
        </>
    );
}

export default Dashboard;