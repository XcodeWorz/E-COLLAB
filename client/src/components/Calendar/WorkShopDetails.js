import React, { Component, Fragment } from "react";
import { Row, Button, CardBody, Card, Modal,
  ModalHeader,
  ModalBody,
  ModalFooter, InputGroup,
  InputGroupAddon,
  Input, } from "reactstrap";
import IntlMessages from "../../helpers/IntlMessages";
import { Colxx, Separator } from "../../components/common/CustomBootstrap";
import Breadcrumb from "../../containers/navs/Breadcrumb";
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import * as workShopAction from "../../redux/actions/workShopActions"
import { bindActionCreators } from "redux"
import AvailityBasic from "../../components/Calendar/workshopAdd"




export class WorkShopDetails extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      modalOpen: false,
    work:this.props.workShop
    }
  }
  
  
 

  render() {


    return (
      <Fragment>




           

          
          <Colxx >
          <Row>
            <Colxx xxs="12" className="mb-4">
                    <p>bbb{this.props.workShop.id}</p>
              <div
                className="content"
                dangerouslySetInnerHTML={{
                  __html: `
                <div leftmargin="0" marginwidth="0" topmargin="0" marginheight="0" offset="0" style="height:auto !important;width:100% !important; font-family: Helvetica,Arial,sans-serif !important; margin-bottom: 40px;">
                <center>
                    <table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" style="max-width:600px; background-color:#ffffff;border:1px solid #e4e2e2;border-collapse:separate !important; border-radius:4px;border-spacing:0;color:#242128; margin:0;padding:40px;"
                        heigth="auto">
                        <tbody>
                            <tr>
                                <td align="left" valign="center" style="padding-bottom:40px;border-top:0;height:100% !important;width:100% !important;">
                                <h3 style="color:#303030; font-size:18px; line-height: 1.6; font-weight:500;">${this.props.workShop.workShopName}
                                </h3>
                                </td>
                                <td align="right" valign="center" style="padding-bottom:40px;border-top:0;height:100% !important;width:100% !important;">
                                    <span style="color: #8f8f8f; font-weight: normal; line-height: 2; font-size: 14px;">${this.props.workShop.workShop_startTime}</span>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2" style="padding-top:10px;border-top:1px solid #e4e2e2">
                                    <h3 style="color:#303030; font-size:18px; line-height: 1.6; font-weight:500;">Description</h3>
                                    <p style="color:#8f8f8f; font-size: 14px; padding-bottom: 20px; line-height: 1.4;">
                                    ${this.props.workShop.workShop_description}
                                    </p>
                                    <h3 style="color:#303030; font-size:18px; line-height: 1.6; font-weight:500;">Requirments</h3>
                                    <p style="color:#8f8f8f; font-size: 14px; padding-bottom: 20px; line-height: 1.4;">
                                    ${this.props.workShop.workShop_Requirments}
                                    </p>
        
                                    <h3 style="color:#303030; font-size:18px; line-height: 1.6; font-weight:500;">Goals</h3>
                                    <ol style="color:#8f8f8f; font-size: 14px; padding-bottom: 20px; padding-left:20px; line-height: 1.6">
                                        <li>${this.props.workShop.workShop_goals}</li>
                                        
                                    </ol>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;border-collapse:collapse;">
                                        <tbody>
                                            <tr>
                                                <td style="padding:15px 0px;" valign="top" align="center">
                                                    <table border="0" cellpadding="0" cellspacing="0" style="border-collapse:separate !important;">
                                                        <tbody>
                                                            <tr>
                                                                <td align="center" valign="middle" style="padding:13px;">
                                                                    
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            </table>
                            </center>
                        </div>
                            `
                }}
              />
            </Colxx>
          </Row>



        </Colxx>
       


   

      </Fragment>
    )
  }
}
WorkShopDetails.propType = {
  dispatch: PropTypes.func.isRequired,
  actions: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  
  return {
    workShop: state.workShop
  }


};

function mapDispatchtoProps(dispatch) {
  return { actions: bindActionCreators(workShopAction, dispatch) }
}
export default connect(mapStateToProps, mapDispatchtoProps)(WorkShopDetails);