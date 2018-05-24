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
//		$target_dir = "D:\GDSE 42";
//		$target_file = $target_dir . basename($_FILES["selectFile"]["name"]);
//		$uploadOK = 1;
//		if (file_exists($target_file)) {
//			echo "Sorry,File already exits";
//			$uploadOK = 0;
//		}
//		if ($uploadOK == 0) {
//			echo "Sorry";
//		} else {
//			$password = $_POST['adminPassword'];
//			if (move_uploaded_file($_FILES['selectFile']["tmp_name"], $target_file)) {
				$result = $this->SystemUserModel->insert([
					'firstName' => $_POST['firstName'],
					'lastName' => $_POST['lastName'],
					'email' => $_POST['email'],
//					'password' => $_POST['password'],
					'addressLine1' => $_POST['addressLine1'],
					'addressLine2' => $_POST['addressLine2'],
					'mobile' => $_POST['mobile'],
					'gender' => $_POST['mail'],
					'country' => $_POST['country'],
					'city' => $_POST['city'],
					'cityCode' => $_POST['cityCode'],
//					'adminpassword' => hash('sha256', $password . Edifices),
//					'adminprofilepicture' => $target_file,
				]);
				echo $result;
//			} else {
//				echo "Sorry,Try Again";
//			}
//		}
	}
}

