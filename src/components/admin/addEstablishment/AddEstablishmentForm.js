import React from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { EST_URL, BASE_URL } from "../../../constants/api";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

const resultJson = res => (res.json ? res.json() : res);
const checkStatus = res => {
    if (res.status >= 200 && res.status < 300) {
        return res;
    }
    return resultJson(res).then(res => {
        throw res;
    });
};
const headers = {
    'Content-Type': 'multipart/form-data',
};

class AddEstablishment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modifiedData: {
                name: '',
                description: '',
                categories: [],
                category: [],
                image: [],
                image_showcase: [],
            },
            allCategories: [],
            error: null,
        };
    }

    componentDidMount = async () => {
        try {
            const allCategories = await fetch(BASE_URL + '/categories', {
                method: 'GET',
                headers: headers,
            })
                .then(checkStatus)
                .then(resultJson);
            this.setState({ allCategories });
        } catch (error) {
            this.setState({ error });
        }
    };

    handleInputChange = ({ target: { name, value } }) => {
        this.setState(prev => ({
            ...prev,
            modifiedData: {
                ...prev.modifiedData,
                [name]: value,
            },
        }));
    };


    handleSubmit = async e => {
        e.preventDefault();
        const formElement = document.querySelector('form');
        try {
            const request = new XMLHttpRequest();
            const formData = new FormData();
            const formElements = formElement.elements;
            const data = {};

            for (let i = 0; i < formElements.length; i++) {
                const thisElement = formElements[i];
                if (!['submit', 'file'].includes(thisElement.type)) {
                    data[thisElement.name] = thisElement.value;
                } else if (thisElement.type === 'file') {
                    if (thisElement.files.length === 1) {
                        const file = thisElement.files[0];
                        formData.append(`files.${thisElement.name}`, file, file.name);
                    } else {
                        for (let i = 0; i < thisElement.files.length; i++) {
                            const file = thisElement.files[i];

                            formData.append(`files.${thisElement.name}`, file, file.name);
                        }
                    }
                }
            }

            formData.append('data', JSON.stringify(data));

            request.open('POST', EST_URL);
            request.send(formData);
        } catch (error) {
            this.setState({ error });
        }
    };

    categorySelection = category => {
        const {
            modifiedData: { categories },
        } = this.state;
        const isSelected = categories.includes(category.id);
        const handleChange = () => {
            if (!categories.includes(category.id)) {
                this.handleInputChange({
                    target: { name: 'category', value: categories.concat(category.id) },
                });
            } else {
                this.handleInputChange({
                    target: {
                        name: 'category',
                        value: categories.filter(v => v !== category.id),
                    },
                });
            }
        };

        return (
            <option name="category" defaultValue={isSelected} onChange={handleChange} value={category.id} key={category.id} id={category.id}> {category.name} </option>
        );
    };


    render() {
        const { error, allCategories, modifiedData } = this.state;

        if (error) {
            return <div>An error occured: {error.message}</div>;
        }

        return (

            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <h1 className="admin-title">New Establishment</h1>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Establishment Name</Form.Label>
                                <Form.Control onChange={this.handleInputChange} value={modifiedData.name} name="name" id="name" placeholder="Hotel Example" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Accommodation Type</Form.Label>
                                <Form.Control name="category" as="select" >
                                    {allCategories.map(this.categorySelection)}
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Establishment Email</Form.Label>
                                <Form.Control type="email" name="email" id="email" placeholder="example@email.com" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Rating</Form.Label>
                                <Form.Control name="rating" as="select"  >
                                    <option value={5}>5</option>
                                    <option value={4}>4</option>
                                    <option value={3}>3</option>
                                    <option value={2}>2</option>
                                    <option value={1}>1</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" as="textarea" rows="4" name="description" id="description" placeholder="Description for the establishment" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Main Image</Form.Label>
                                <Form.File type="file" name="image" id="image" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Images</Form.Label>
                                <Form.File type="file" name="image_showcase" id="image_showcase1" />
                            </Form.Group>

                            <Form.Group>
                                <Form.File type="file" name="image_showcase" id="image_showcase2" />
                            </Form.Group>

                            <Form.Group>
                                <Form.File type="file" name="image_showcase" id="image_showcase3" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>

                            <Form.Group>
                                <Form.Label>Price Room per night ($)</Form.Label>
                                <Form.Control type="number" name="price" id="price" placeholder="29.90" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Price person per night ($)</Form.Label>
                                <Form.Control type="number" name="price_adult" id="price_adult" placeholder="10.00" />
                            </Form.Group>
                        </Col>
                        <Col>

                            <Form.Group>
                                <Form.Label>Max Guests</Form.Label>
                                <Form.Control type="number" name="max_guests" id="max_guests" placeholder="2" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Distance km from city</Form.Label>
                                <Form.Control type="number" name="distance_city" id="distance_city" placeholder="2.9" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group>
                        <Form.Label>Google Iframe url Location</Form.Label>
                        <Form.Control type="url" name="location" id="location" placeholder="https://goo.gl/maps/rN5uK3QuQDgHspVU9" />
                        <span>only use url, do not write iframe tags or styles</span>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>All-Inclusive</Form.Label>
                        <Form.Control name="all_inclusive" as="select" >
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </Form.Control>
                    </Form.Group>
                    <Button type="submit" variant="dark" className="submit-message" >
                        Create Establishment
                </Button>
                </Form>
            </Container >
        );

    }
}

export default AddEstablishment;