import React, { Component } from 'react';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import { Slide, Flip, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { cssTransition } from 'react-toastify';

export const ERRO = "Erro";

export const  Notify = (type, mensagem) => {

    const parametros = {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    }

    

    switch (type) {
        case 'info':
            toast.info(`🦄 ${mensagem}`, {
                parametros
            });
            break;
        case 'success':
            toast.success('Sucesso', {
                parametros
            });
            break;
        case 'warning':
            toast.warn('Warning message', {
                parametros
            });
            break;
        case 'error':
            toast.error('Error message', {
                parametros
            });
            break;
    }

}