<?php
/**
 * Created by IntelliJ IDEA.
 * User: USER
 * Date: 5/28/2018
 * Time: 1:19 AM
 */
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:GET,POST');
header('Access-Control-Allow-Headers, Content-Type');
class Client extends CI_Controller
{

	public function __construct()
	{
		parent::__construct();
		$this->load->model('ClientModel');

	}

	public function insert()
	{
		$result = $this->ClientModel->insert([
			'firstName' => $_POST['firstName'],
			'lastName' => $_POST['lastName'],
			'email' => $_POST['email'],
			'password' => $_POST['password'],
			'mobile' => $_POST['mobile'],
			'country' => $_POST['country'],
			'city' => $_POST['city'],
			'cityCode' => $_POST['cityCode'],
		]);
		echo $result;
//			} else {
//				echo "Sorry,Try Again";
//			}
//		}
	}
}

