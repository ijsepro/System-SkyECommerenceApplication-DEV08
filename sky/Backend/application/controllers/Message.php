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
		$this->load->model("message_model");
		$data["fetch_data"]=$this->message_model->fetch_data();
		$this->load->view("message_view",$data);
	}
}
