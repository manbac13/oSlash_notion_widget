
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaShareAltSquare } from "react-icons/fa"
import { AiOutlineQuestionCircle } from "react-icons/ai"
import { FiLink } from "react-icons/fi"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useState } from 'react';

const Widget = (prop) => {

    const [focus, setFocus] = useState(false)
    const [displayProperty, setdisplayProperty] = useState("none")
    const [displayParent, setDisplayParent] = useState("block")
    const [dropValue, setDropValue] = useState("Full Access")

    let display = prop.displayProp

    function handleFocus() {
        setFocus(true)
        setdisplayProperty("block")
        setDisplayParent("none")
    }

    function handleSelect(e){
        console.log(e)
        setDropValue(e)
    }
    console.log(focus)


    return (
        <>
            <div className='widget-complete-div'>
                <div className="wid-main-div" style={{ display: displayParent}}>
                    <div className='wid-share-header' >

                        <div className='wid-share-icon-div'>
                            <FaShareAltSquare style={{ width: "25px", height: "25px" }} />
                        </div>

                        <div className='wid-share-info-div'>
                            <div className='wid-share-info-title'>
                                Share to Web
                            </div>
                            <div wid-share-info-subtitle>
                                Publish and share link with everyone
                            </div>
                        </div>

                        <div className='wid-share-slider'>
                            <Form>
                                <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                />
                            </Form>
                        </div>
                    </div>

                    <div className='wid-input'>
                        <InputGroup className="mb-3">
                            <Form.Control
                                onFocus={handleFocus}
                                className='people-input'
                                placeholder="People, emails, groups"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <Button variant="outline-secondary" id="button-addon2">
                                Invite
                            </Button>
                        </InputGroup>
                    </div>

                    <div className='wid-footer'>
                        <div>
                            <AiOutlineQuestionCircle style={{ width: "25px", height: "25px" }} />
                        </div>
                        <div>learn about something</div>
                        <div className='wid-footer-link'>
                            <FiLink />
                            &nbsp;
                            Copy Link
                        </div>
                    </div>
                </div>

                <div className='invite-main-div wid-main-div' style={{display:displayProperty}}>
                    <div className='wid-input'>
                        <InputGroup className="mb-3">
                            <Form.Control
                                onFocus={handleFocus}
                                className='people-input'
                                placeholder="People, emails, groups"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            
                            <DropdownButton
                                variant="outline-secondary"
                                title= "Full Access"
                                id="input-group-dropdown-2"
                                align="end"
                                onSelect={handleSelect}
                            >
                                <Dropdown.Item href="#" eventKey="Full Access">Full Access</Dropdown.Item>
                                <Dropdown.Item href="#" eventKey="Can access">Can access</Dropdown.Item>
                                <Dropdown.Item href="#" eventKey="Can Edit">Can Edit</Dropdown.Item>
                                <Dropdown.Item href="#" eventKey="No Access">No Access</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#">Separated link</Dropdown.Item>
                            </DropdownButton>

                            <Button variant="outline-secondary" id="button-addon2">
                                Invite
                            </Button>
                        </InputGroup>
                    </div>

                    <div className='wid-footer'>
                        <div>
                            <AiOutlineQuestionCircle style={{ width: "25px", height: "25px" }} />
                        </div>
                        <div>learn about something</div>
                        <div className='wid-footer-link'>
                            <FiLink />
                            &nbsp;
                            Copy Link
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Widget;