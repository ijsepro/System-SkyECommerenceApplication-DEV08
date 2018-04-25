<?php
/**
 * Created by IntelliJ IDEA.
 * User: USER
 * Date: 4/23/2018
 * Time: 3:46 AM
 */
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods:GET.POST');
header('Access-Control-Allow-Headers,Content-Type');

class Message extends CI_Controller {
	public function __construct()
	{
		parent:: __construct();
		$this->load->model('message_model');
	}
	public function index(){
//		$query=$this->load->db("messages");
		$query=$this->db->get("messages");
//		$json=json_encode($query);
		$json=json_encode($query->result());
		echo $json;
//		$data["fetch_data"]=$this->message_model->fetch_data();
//		echo $data[0];
	}
}
