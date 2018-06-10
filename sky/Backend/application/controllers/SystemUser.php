<?php
/**
 * Created by IntelliJ IDEA.
 * User: USER
 * Date: 5/24/2018
 * Time: 2:05 AM
 */

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:GET,POST');
header('Access-Control-Allow-Headers, Content-Type');
class SystemUser extends CI_Controller
{

	public function __construct()
	{
		parent::__construct();
		$this->load->model('SystemUserModel');

	}

	public function insert()
	{
		$result = $this->SystemUserModel->insert([
			'firstName' => $_POST['firstName'],
			'lastName' => $_POST['lastName'],
			'email' => $_POST['email'],
			'addressLine1' => $_POST['addressLine1'],
			'addressLine2' => $_POST['addressLine2'],
			'mobile' => $_POST['mobile'],
			'gender' => $_POST['mail'],
			'country' => $_POST['country'],
			'city' => $_POST['city'],
			'cityCode' => $_POST['cityCode'],
		]);
		echo $result;
	}
}

