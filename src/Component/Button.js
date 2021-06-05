import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Button,Modal,ModalBody,ModalHeader,Form,FormGroup,Label,Input,} from "reactstrap";
class Addinvoice extends Component{
    constructor(props){
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);

        this.state = {
            isNavOpen: false,
            isModalOpen: false,
            list:[
                {
                    id:"",
                    date:"",
                    name:"",
                    rupees:"",
                    status: false
                },
            ]
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });       
    }

    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event) {
        this.toggleModal();
        this.setState(
           { list:[
                {
                    id:"",
                    date:this.date.value,
                    name:this.name.value,
                    rupees:this.rupees.value,
                    status:this.status.checked
                }
            ]}
        )
    }

    render(){
        return(

            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container" color='primary'>
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"> </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className='ml-auto' navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}> Add Invoice </Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>
                        Add New Invoice
                    </ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                            
                            <FormGroup>
                                <Label htmlFor="name">Name</Label>
                                <Input type="text" id="name" name="name"
                                     />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="date">Date</Label>
                                <Input type="Date" id="date" name="date"
                                     />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="ruppes">Amount</Label>
                                <Input type="text" id="ruppes" name="ruppes"
                                     />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="status"
                                      />
                                    Status
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Add Item</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>

            
        )
    }
}

export default Addinvoice;