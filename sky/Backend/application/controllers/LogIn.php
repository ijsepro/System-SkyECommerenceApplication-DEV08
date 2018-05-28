<?php
/**
 * Created by IntelliJ IDEA.
 * User: USER
 * Date: 5/25/2018
 * Time: 6:42 PM
 */

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:GET,POST');
header('Access-Control-Allow-Headers, Content-Type');
class LogIn extends CI_Controller
{

	public function __construct()
	{
		parent::__construct();
		$this->load->model('admin_model');
	}

	public function index()
	{
		$email = $this->input->post('userEmail');
		$password = $this->input->post('userPassword');

		$result = $this->SystemUserModel->checkSystemUser($email, hash('sha256', $password . Edifices));

		if ($result == TRUE) {

			echo '{
				"success": true,
				"message": "Correct"
				}';

		} else {

			echo '{
				"success": false,
				"message": "Incorrect"
				}';

		}

	}
}
