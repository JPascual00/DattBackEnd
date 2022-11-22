var express = require('express');
var router = express.Router();

const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root123',
    database: 'datt'
});

router.get('/', function(req, res, next) {
   
  const { organization_name } = req.params;

  const sql = `SELECT * FROM response_record_registration`

  connection.query(sql, (err, results, field) => {
    if(err) {
      console.log(err)
      return res.sendStatus(500);
    }
    return res.json(results);
  });
});

router.get('/admin-get', function(req, res, next) {
  const testsql = `SHOW COLUMNS FROM response_record_registration`;

  connection.query(testsql, (err, results, field) =>{
    if (err) {
      console.log(err)
      return res.sendStatus(500);
    }
    return res.json(results);
  });
});

router.post('adminpost2', function(req, res, next) {
  const fields = {
    reception_type,
    reception_code,
    requester,
    document_no,
    business_segment,
    service_symbol,
    sales_classfication,
    estimate,
    re_repair,
    SS_code,
    visit_hope_day
  };

  const values = ['Telephone', '2134689123', 'Sales', '1234567890', 'Repair', '0987654321', 'Self-Repair(Toshiba)', 'Yes', 'No', '5432109876', '2022-04-10'];
  const sqlcommand = `INSERT INTO repair_request_registration(${fields}) VALUES (${values})`;
 

  connection.query(sqlcommand, function (err, results) {
    if (err) throw err;
    console.log('Data Inserted');
  })
});

router.post('/admin-post', function (req, res, next) {

  //const field2 = [reception_code, receptionist, responders, waterstatus, completion_date, reception_date, modified_date, dealer_tel, dealer_contact_tel1, dealer_name, fax_replied, dealer_address, retailer_code, dealer_contact_tel2, responsible, dealer_fax, order_number, gender, relation, age, institutional_classification, area, customer_type, customer_name_kanji, customer_company_name_kanji, customer_name_katakana, customer_company_name_katakana, deployement_name, customer_address, address_attribute, customer_tel, customer_contact_tel1, fax, customer_email, customer_contact_tel2, product_category, form_name, trade_name, release_date, installation_date, manufacturer_name, manufacturer_number, query_classification, urgency, scheduled_response, recall_cases, incoming_line, pl_case, start_date, end_date, reception_method, piece_name, inquiry_details, correspondence_details, remarks, implementation_of_CS_survey, workaround, dissatisfied_or_not, solution_details, outcome, action, customer_reference_information, questionnaire_code, request_for_proposal, succession_control_number, flag, callback, business_segment, name_of_the_store_of_purchase, product, where_to_get_announcement, deodorization_off_operation, with_or_without_waterproof, residence, name_of_building, laundry_dealer_name, workspace, response_results, successor, model_number, target_lot, delivery_specification, dm_number, cleaner_manufacturing_number, request_for_carriage_number, designated_delivery_time_zone, water_heater_correspondence, water_heater_status, error, dealers_special_contract, business_request_number, jx_reception_code, distributor_energy_distributor, elec_stove_store_name, elec_stove_product, number_of_units_shipped, elec_stove_where_to_get_announcement, scheme_code];
  /*
  const {
    reception_code, receptionist,
    responders, waterstatus,
    completion_date, reception_date,
    modified_date, dealer_tel,
    dealer_contact_tel1, dealer_name,
    fax_replied, dealer_address,
    retailer_code, dealer_contact_tel2,
    responsible, dealer_fax,
    order_number, gender,
    relation, age,
    institutional_classification, area,
    customer_type, customer_name_kanji,
    customer_company_name_kanji, customer_name_katakana,
    customer_company_name_katakana, deployement_name,
    customer_address, address_attribute,
    customer_tel, customer_contact_tel1,
    fax, customer_email,
    customer_contact_tel2, product_category,
    form_name, trade_name,
    release_date, installation_date,
    manufacturer_name, manufacturer_number,
    query_classification, urgency,
    scheduled_response, recall_cases,
    incoming_line, pl_case,
    start_date, end_date,
    reception_method, piece_name,
    inquiry_details, correspondence_details,
    remarks, implementation_of_CS_survey,
    workaround, dissatisfied_or_not,
    solution_details, outcome,
    action, customer_reference_information,
    questionnaire_code, request_for_proposal,
    succession_control_number, flag,
    callback, business_segment,
    name_of_the_store_of_purchase, product,
    where_to_get_announcement, deodorization_off_operation,
    with_or_without_waterproof, residence,
    name_of_building, laundry_dealer_name,
    workspace, response_results,
    successor, model_number,
    target_lot, delivery_specification,
    dm_number, cleaner_manufacturing_number,
    request_for_carriage_number, designated_delivery_time_zone,
    water_heater_correspondence, water_heater_status,
    error, dealers_special_contract,
    business_request_number, jx_reception_code,
    distributor_energy_distributor, elec_stove_store_name,
    elec_stove_product, number_of_units_shipped,
    elec_stove_where_to_get_announcement, scheme_code
  } = req.body;

  const field3 = [
    req.body.reception_code, req.body.receptionist,
    req.body.responders, req.body.waterstatus,
    req.body.completion_date, req.body.reception_date,
    req.body.modified_date, req.body.dealer_tel,
    req.body.dealer_contact_tel1, req.body.dealer_name,
    req.body.fax_replied, req.body.dealer_address,
    req.body.retailer_code, req.body.dealer_contact_tel2,
    req.body.responsible, req.body.dealer_fax,
    req.body.order_number, req.body.gender,
    req.body.relation, req.body.age,
    req.body.institutional_classification, req.body.area,
    req.body.customer_type, req.body.customer_name_kanji,
    req.body.customer_company_name_kanji, req.body.customer_name_katakana,
    req.body.customer_company_name_katakana, req.body.deployement_name,
    req.body.customer_address, req.body.address_attribute,
    req.body.customer_tel, req.body.customer_contact_tel1,
    req.body.fax, req.body.customer_email,
    req.body.customer_contact_tel2, req.body.product_category,
    req.body.form_name, req.body.trade_name,
    req.body.release_date, req.body.installation_date,
    req.body.manufacturer_name, req.body.manufacturer_number,
    req.body.query_classification, req.body.urgency,
    req.body.scheduled_response, req.body.recall_cases,
    req.body.incoming_line, req.body.pl_case,
    req.body.start_date, req.body.end_date,
    req.body.reception_code, req.body.piece_name,
    req.body.inquiry_details, req.body.correspondence_details,
    req.body.remarks, req.body.implementation_of_CS_survey,
    req.body.workaround, req.body.dissatisfied_or_not,
    req.body.solution_details, req.body.outcome,
    req.body.action, req.body.customer_reference_information,
    req.body.questionnaire_code, req.body.request_for_proposal,
    req.body.succession_control_number, req.body.flag,
    req.body.callback, req.body.business_segment,
    req.body.name_of_the_store_of_purchase, req.body.product,
    req.body.where_to_get_announcement, req.body.deodorization_off_operation,
    req.body.with_or_without_waterproof, req.body.residence,
    req.body.name_of_building, req.body.laundry_dealer_name,
    req.body.workspace, req.body.response_results,
    req.body.successor, req.body.model_number,
    req.body.target_lot, req.body.delivery_specification,
    req.body.dm_number, req.body.cleaner_manufacturing_number,
    req.body.request_for_carriage_number, req.body.designated_delivery_time_zone,
    req.body.water_heater_correspondence, req.body.water_heater_status,
    req.body.error, req.body.dealers_special_contract,
    req.body.business_request_number, req.body.jx_reception_code,
    req.body.distributor_energy_distributor, req.body.elec_stove_store_name,
    req.body.elec_stove_product, req.body.number_of_units_shipped,
    req.body.elec_stove_where_to_get_announcement, req.body.scheme_code
  ];
  */

  
  //const values2 = ['b234337asdj1211', 'test', 'test', 'folding', '2022-04-10', '2022-04-10','2022-04-10','test', '123', 'test', 'yes', 'test', 'test', '123', 'test', 'test', 'test', 'male', 'myself', 'Young(~20)', 'firefighting', 'Hokkaido', 'Store', 'test', 'test', 'test', 'test', 'test', 'test', 'home', '123', '123', 'test', 'test', '123', 'test', 'test', 'test', '2022-04-10', '2022-04-10', 'test', 'test', 'test', 'high', '2022-04-10', 'yes', 'dispatch', 'yes', '2022-04-10', '2022-04-10', 'Phone', 'test', 'test', 'test', 'test', 'Request and Accepted', 'Solve it yourself', 'yes', 'No reference', 'Guide Solution', 'Without', 'Instruction Manual', 'test', 'Without', 'test', 'test', 'test', 'SCSK', 'test', 'Target', 'Distributor(DM)', 'Guided', 'Yes', 'Condominium', 'test', 'test', 'Yes', 'Repair Schedule Reception', 'Aichi', 'Vc-Y2C', 'Target', '2022-04-10', 'test', 'test', 'test', 'Morning', 'Send Fax', 'Processing', 'test', 'test', 'test', 'test', 'test', 'test', 'Target', '123', 'Distributor(DM)', 'R'];
  const values3 = [
    'b234337asdj1203',
    'receptionist',
    'responders',
    'processing',
    '2023-05-05',
    '2023-05-05',
    '2025-05-05',
    'test',
    10,
    'dealer name',
    'yes',
    'dealer address',
    'retailer code',
    20,
    'responsible',
    'dealer fax',
    'order number',
    'female',
    'person concerned',
    'Young(~20)',
    'cac',
    'Iwate',
    'Store',
    'cust-name-kanji',
    'cust comp name kanji',
    'cust name katakana',
    'cust comp name katakana',
    'deployment name',
    'cust address',
    'work',
    30,
    40,
    'fax',
    'customer email',
    50,
    'product category',
    'form name',
    'trade name',
    '2023-05-05',
    '2023-05-05',
    'manufacturer name',
    'manufacturer number',
    'query classification',
    'middle',
    '2023-05-05',
    'yes',
    'dispatch',
    'yes',
    '2023-05-05',
    '2023-05-05',
    'Phone',
    'piece name',
    'inquiry details',
    'correspondence details',
    'remarks',
    'Request and Accepted',
    'Solve it yourself',
    'yes',
    'No reference',
    'Guide Solution',
    'Without',
    'Instruction Manual',
    'questionnaire code',
    'Without',
    'succession control number',
    'flag',
    'callback',
    'SCSK',
    'name of the store of purchase',
    'Target',
    'Distributor(DM)',
    'Guided',
    'Yes',
    'Condominium',
    'name of building',
    'laundry dealer name',
    'Yes',
    'Repair Schedule Reception',
    'Aichi',
    'Others',
    'Target',
    '2023-05-05',
    'dm number',
    'cleaner manufacturing number',
    'request for carriage number',
    'Morning',
    'Send Fax',
    'Processing',
    'error',
    'dealers special contract',
    'business request number',
    'jx reception code',
    'distributor energy distributor',
    'elec stove store name',
    'Target',
    60,
    'Distributor(DM)',
    'R'
  ];
  const sqlcommand3 = `INSERT INTO response_record_registration (reception_code, receptionist, responders, waterstatus, completion_date, reception_date, modified_date, dealer_tel, dealer_contact_tel1, dealer_name, fax_replied, dealer_address, retailer_code, dealer_contact_tel2, responsible, dealer_fax, order_number, gender, relation, age, institutional_classification, area, customr_type, customer_name_kanji, customer_company_name_kanji, customer_name_katakana, customer_company_name_katakana, deployment_name, customer_address, address_attribute, customer_tel, customer_contact_tel1, fax, customer_email, customer_contact_tel2, product_category, form_name, trade_name, release_date, installation_date, manufacturer_name, manufacturer_number, query_classification, urgency, scheduled_response, recall_cases, incoming_line, pl_case, start_date, end_date, reception_method, piece_name, inquiry_details, correspondence_details, correspondence_details, remarks, implementation_of_CS_survey, workaround, dissatisfied_or_not, solution_details, outcome, action, customer_reference,information, questionnaire_code, request_for_proposal, succession_control_number, flag, callback, business_segment, name_of_the_store_purchase, product, where_to_get_announcement, deodorization_off_operation, with_or_without_waterproof, residence, name_of_building, laundry_dealer_name, workspace, response_results, successor, model_number, target_lot, delivery_specification, dm_number, cleaner_manufacturing_number, request_for_carriage_number, designated_delivery_time_zone, water_heater_correspondence, water_heater_status, error, dealers_special_contract, business_request_number, jx_reception_code, distributor_energy_distributor, elec_stove_store_name, elec_stove_product, number_of_units_shipped, elec_stove_where_to_get_announcement, scheme_code) VALUES (${values3})`
  //const sqlcommand2 = `INSERT INTO response_record_registration (reception_code, receptionist, responders, waterstatus, completion_date, reception_date, modified_date, dealer_tel, dealer_contact_tel1, dealer_name, fax_replied, dealer_address, retailer_code, dealer_contact_tel2, responsible, dealer_fax, order_number, gender, relation, age, institutional_classification, area, customer_type, customer_name_kanji, customer_company_name_kanji, customer_name_katakana, customer_company_name_katakana, deployement_name, customer_address, address_attribute, customer_tel, customer_contact_tel1, fax, customer_email, customer_contact_tel2, product_category, form_name, trade_name, release_date, installation_date, manufacturer_name, manufacturer_number, query_classification, urgency, scheduled_response, recall_cases, incoming_line, pl_case, start_date, end_date, reception_method, piece_name, inquiry_details, correspondence_details, remarks, implementation_of_CS_survey, workaround, dissatisfied_or_not, solution_details, outcome, action, customer_reference_information, questionnaire_code, request_for_proposal, succession_control_number, flag, callback, business_segment, name_of_the_store_of_purchase, product, where_to_get_announcement, deodorization_off_operation, with_or_without_waterproof, residence, name_of_building, laundry_dealer_name, workspace, response_results, successor, model_number, target_lot, delivery_specification, dm_number, cleaner_manufacturing_number, request_for_carriage_number, designated_delivery_time_zone, water_heater_correspondence, water_heater_status, error, dealers_special_contract, business_request_number, jx_reception_code, distributor_energy_distributor, elec_stove_store_name, elec_stove_product, number_of_units_shipped, elec_stove_where_to_get_announcement, scheme_code) 
  //VALUES ('b235555asdj1201', 'test', 'test', 'folding', '2022-04-10', '2022-04-10','2022-04-10','test', '123', 'test', 'yes', 'test', 'test', '123', 'test', 'test', 'test', 'male', 'myself', 'Young(~20)', 'firefighting', 'Hokkaido', 'Store', 'test', 'test', 'test', 'test', 'test', 'test', 'home', '123', '123', 'test', 'test', '123', 'test', 'test', 'test', '2022-04-10', '2022-04-10', 'test', 'test', 'test', 'high', '2022-04-10', 'yes', 'dispatch', 'yes', '2022-04-10', '2022-04-10', 'Phone', 'test', 'test', 'test', 'test', 'Request and Accepted', 'Solve it yourself', 'yes', 'No reference', 'Guide Solution', 'Without', 'Instruction Manual', 'test', 'Without', 'test', 'test', 'test', 'SCSK', 'test', 'Target', 'Distributor(DM)', 'Guided', 'Yes', 'Condominium', 'test', 'test', 'Yes', 'Repair Schedule Reception', 'Aichi', 'Vc-Y2C', 'Target', '2022-04-10', 'test', 'test', 'test', 'Morning', 'Send Fax', 'Processing', 'test', 'test', 'test', 'test', 'test', 'test', 'Target', '123', 'Distributor(DM)', 'R')`;
  console.log('Reached');

  //const sqlcommand4 = `INSERT INTO response_record_registration (${fields}) values (${values})`

  

  connection.query(sqlcommand3, function(err, result) {
    if (err) throw err;
    console.log('Recorded');
  });
});



  
  module.exports = router;