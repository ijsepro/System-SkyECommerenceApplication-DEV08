<?php
/**
 * Created by IntelliJ IDEA.
 * User: USER
 * Date: 5/24/2018
 * Time: 2:06 AM
 */
class SystemUserModel extends CI_Model{

	public function insert($data)
	{
		$this->db->insert('systemUser', $data);
		return $this->db->affected_rows();
	}

//	function sendPasswordResetMail($to, $token)
//	{
//
//		$link = 'http://localhost:4200/reset-password';
//
//		$body = "				Hello,
//				 You . " . $link . "
//				 Click . " . $link . "
//				 Place  " . $token . "";
//
//		mail($to, "Edifices Homes: Password Recovery Instruction", $body);
//
//		return 'success';
//
//	}
//	function verifytoken($userID, $token)
//	{
//		$this->db->select('valid');
//		$query = $this->db->get_where('recovery_keys', ['userID' => $userID] && ['token' => $token]);
//
//		$row = mysqli_fetch_assoc($query);
//
//		if (mysqli_num_rows($query) > 0) {
//			if ($row['valid'] == 1) {
//				return 1;
//			} else {
//				return 0;
//			}
//		} else {
//			return 0;
//		}
//	}
//
//	function getUserID($token)
//	{
//		$this->db->select('userID');
//		$query = $this->db->get_where('recovery_keys', ['token' => $token]);
//
//		$uid = null;
//
//		foreach ($query->result() as $row) {
//			if ($row->valid = 1) {
//				$uid = $row->userID;
//			}
//		}
//
//		return $uid;
//	}
//
//	function getRID($token)
//	{
//		$this->db->select('rid');
//		$query = $this->db->get_where('recovery_keys', ['token' => $token]);
//
//		$rid = null;
//
//		foreach ($query->result() as $row) {
//			if ($row->valid = 1) {
//				$rid = $row->rid;
//			}
//		}
//
//		return $rid;
//	}
}
