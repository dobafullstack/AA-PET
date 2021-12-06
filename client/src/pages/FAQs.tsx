import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Layout/Breadcrumb';

export default function FAQs() {
  return (
    <>
      <Breadcrumb title='FAQs'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>FAQ</li>
      </Breadcrumb>

      <div className='section section-margin'>
        <div className='accordion_area'>
          <div className='container'>
            <div className='row mb-n8'>
              <div className='col-md-6 mb-8'>
                <div className='faq_content_area'>
                  <h4 className='title'>General Questions</h4>
                </div>

                <div id='accordionExample' className='accordion'>
                  <div className='card_dipult accordion-item'>
                    <div className='card-header card_accor' id='headingfive'>
                      <button className='btn btn-link' data-bs-toggle='collapse' data-bs-target='#collapseFive' aria-expanded='true' aria-controls='collapseFive'>
                        <i className='ti-plus'></i>
                        <i className='ti-minus'></i>How do I figure out the cubic feet of my shipment?
                      </button>
                    </div>
                    <div id='collapseFive' className='collapse accordion-collapse show border-0' aria-labelledby='headingfive' data-bs-parent='#accordionExample'>
                      <div className='card-body'>
                        <p>
                          Nulla imperdiet odio tempor nisl vulputate scelerisque. Fusce interdum ultricies convallis. Vivamus efficitur purus eu elit scelerisque blandit. Nullam viverra est quis erat
                          fringilla, at rutrum sem lacinia.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='card_dipult accordion-item'>
                    <div className='card-header card_accor' id='headingsix'>
                      <button className='btn btn-link collapsed' data-bs-toggle='collapse' data-bs-target='#collapseSix' aria-expanded='false' aria-controls='collapseSix'>
                        <i className='ti-plus'></i>
                        <i className='ti-minus'></i>How do I ship my automobile?
                      </button>
                    </div>
                    <div id='collapseSix' className='collapse accordion-collapse border-0' aria-labelledby='headingsix' data-bs-parent='#accordionExample'>
                      <div className='card-body'>
                        <p>
                          Nulla imperdiet odio tempor nisl vulputate scelerisque. Fusce interdum ultricies convallis. Vivamus efficitur purus eu elit scelerisque blandit. Nullam viverra est quis erat
                          fringilla, at rutrum sem lacinia.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='card_dipult accordion-item'>
                    <div className='card-header card_accor' id='headingseven'>
                      <button className='btn btn-link collapsed' data-bs-toggle='collapse' data-bs-target='#collapseSeven' aria-expanded='false' aria-controls='collapseSeven'>
                        <i className='ti-plus'></i>
                        <i className='ti-minus'></i>Is my shipment insured?
                      </button>
                    </div>
                    <div id='collapseSeven' className='collapse accordion-collapse border-0' aria-labelledby='headingseven' data-bs-parent='#accordionExample'>
                      <div className='card-body'>
                        <p>
                          Nulla imperdiet odio tempor nisl vulputate scelerisque. Fusce interdum ultricies convallis. Vivamus efficitur purus eu elit scelerisque blandit. Nullam viverra est quis erat
                          fringilla, at rutrum sem lacinia.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='card_dipult accordion-item'>
                    <div className='card-header card_accor' id='headingeight'>
                      <button className='btn btn-link collapsed' data-bs-toggle='collapse' data-bs-target='#collapseEight' aria-expanded='false' aria-controls='collapseEight'>
                        <i className='ti-plus'></i>
                        <i className='ti-minus'></i>How long will it take my shipment to reach my customer?
                      </button>
                    </div>
                    <div id='collapseEight' className='collapse accordion-collapse border-0' aria-labelledby='headingeight' data-bs-parent='#accordionExample'>
                      <div className='card-body'>
                        <p>
                          Nulla imperdiet odio tempor nisl vulputate scelerisque. Fusce interdum ultricies convallis. Vivamus efficitur purus eu elit scelerisque blandit. Nullam viverra est quis erat
                          fringilla, at rutrum sem lacinia.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-6 mb-8'>
                <div className='faq_content_area'>
                  <h4 className='title'>Purchasing Questions</h4>
                </div>

                <div id='accordionExample2' className='accordion'>
                  <div className='card_dipult accordion-item'>
                    <div className='card-header card_accor' id='headingOne'>
                      <button className='btn btn-link' data-bs-toggle='collapse' data-bs-target='#collapseOne' aria-expanded='true' aria-controls='collapseOne'>
                        <i className='ti-plus'></i>
                        <i className='ti-minus'></i>Before you get started
                      </button>
                    </div>
                    <div id='collapseOne' className='collapse accordion-collapse show border-0' aria-labelledby='headingOne' data-bs-parent='#accordionExample2'>
                      <div className='card-body'>
                        <p>
                          Nulla imperdiet odio tempor nisl vulputate scelerisque. Fusce interdum ultricies convallis. Vivamus efficitur purus eu elit scelerisque blandit. Nullam viverra est quis erat
                          fringilla, at rutrum sem lacinia.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='card_dipult accordion-item'>
                    <div className='card-header card_accor' id='headingTwo'>
                      <button className='btn btn-link collapsed' data-bs-toggle='collapse' data-bs-target='#collapseTwo' aria-expanded='false' aria-controls='collapseTwo'>
                        <i className='ti-plus'></i>
                        <i className='ti-minus'></i>Compatibility with premium plugins
                      </button>
                    </div>
                    <div id='collapseTwo' className='collapse accordion-collapse border-0' aria-labelledby='headingTwo' data-bs-parent='#accordionExample2'>
                      <div className='card-body'>
                        <p>
                          Nulla imperdiet odio tempor nisl vulputate scelerisque. Fusce interdum ultricies convallis. Vivamus efficitur purus eu elit scelerisque blandit. Nullam viverra est quis erat
                          fringilla, at rutrum sem lacinia.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='card_dipult accordion-item'>
                    <div className='card-header card_accor' id='headingThree'>
                      <button className='btn btn-link collapsed' data-bs-toggle='collapse' data-bs-target='#collapseThree' aria-expanded='false' aria-controls='collapseThree'>
                        <i className='ti-plus'></i>
                        <i className='ti-minus'></i>Install theme demo contents
                      </button>
                    </div>
                    <div id='collapseThree' className='collapse accordion-collapse border-0' aria-labelledby='headingThree' data-bs-parent='#accordionExample2'>
                      <div className='card-body'>
                        <p>
                          Nulla imperdiet odio tempor nisl vulputate scelerisque. Fusce interdum ultricies convallis. Vivamus efficitur purus eu elit scelerisque blandit. Nullam viverra est quis erat
                          fringilla, at rutrum sem lacinia.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='card_dipult accordion-item'>
                    <div className='card-header card_accor' id='headingfour'>
                      <button className='btn btn-link collapsed' data-bs-toggle='collapse' data-bs-target='#collapseFour' aria-expanded='false' aria-controls='collapseFour'>
                        <i className='ti-plus'></i>
                        <i className='ti-minus'></i>Translation and localization services
                      </button>
                    </div>
                    <div id='collapseFour' className='collapse accordion-collapse border-0' aria-labelledby='headingfour' data-bs-parent='#accordionExample2'>
                      <div className='card-body'>
                        <p>
                          Nulla imperdiet odio tempor nisl vulputate scelerisque. Fusce interdum ultricies convallis. Vivamus efficitur purus eu elit scelerisque blandit. Nullam viverra est quis erat
                          fringilla, at rutrum sem lacinia.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
