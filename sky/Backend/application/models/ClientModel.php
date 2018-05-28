<?php
/**
 * Created by IntelliJ IDEA.
 * User: USER
 * Date: 5/28/2018
 * Time: 1:27 AM
 */
class ClientModel extends CI_Model{
	public function insert($data)
	{
		$this->db->insert('client', $data);
		return $this->db->affected_rows();
	}
//	public function checkSystemUser($email, $password)
//	{
//		$query = $this->db->select('firstName')->where(['firstName' => $password])->where(['lastName' => $email])->get('systemUser');
//		if ($query->num_rows() == 1) {
//			return true;
//		} else {
//			return false;
//		}
//	}
}
