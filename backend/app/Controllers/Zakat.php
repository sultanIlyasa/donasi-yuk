<?php

namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;
use App\Models\TransaksiZakatModel;

class Zakat extends ResourceController
{
    /**
     * Return an array of resource objects, themselves in array format
     *
     * @return mixed
     */
    use ResponseTrait;
    public function index()
    {
        //
        $model = new TransaksiZakatModel();
        $data = $model->findAll();
        return $this->respond($data);
    }

    /**
     * Return the properties of a resource object
     *
     * @return mixed
     */
    public function show($id = null)
    {
        //
        $model = new TransaksiZakatModel();
        $data = $model->find(['id', $id]);
        return $this->respond($data);
    }

    /**
     * Return a new resource object, with default properties
     *
     * @return mixed
     */
    public function new()
    {
        //
    }

    /**
     * Create a new resource object, from "posted" parameters
     *
     * @return mixed
     */
    public function create()
    {
        //
        $model = new TransaksiZakatModel();
        $data = [
            'jenis'=> $this->request->getVar('jenis'), 
            'jumlah'=> $this->request->getVar('jumlah'), '
            id_user'=> $this->request->getVar('id_user')
        ];
        $model->save($data);
        return $this->respond($data);
    }

    /**
     * Return the editable properties of a resource object
     *
     * @return mixed
     */
    public function edit($id = null)
    {
        //
    }

    /**
     * Add or update a model resource, from "posted" properties
     *
     * @return mixed
     */
    public function update($id = null)
    {
        //
        $model = new TransaksiZakatModel();
        $data = [
            'jenis'=> $this->request->getVar('jenis'), 
            'jumlah'=> $this->request->getVar('jumlah'), '
            id_user'=> $this->request->getVar('id_user')
        ];
        $model->update($id,$data);
        return $this->respond($data);
    }

    /**
     * Delete the designated resource object from the model
     *
     * @return mixed
     */
    public function delete($id = null)
    {
        //
        $model = new TransaksiZakatModel();
        $model->delete($id);
    }
}
