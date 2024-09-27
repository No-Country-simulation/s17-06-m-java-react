import axios from 'axios';

// Función para obtener el historial de transacciones
export const getTransactionHistory = async () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('No se encontró el token de autenticación');
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.get('https://payout.redromsolutions.com/transaction/v1/history', config);

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Error en la respuesta: ${response.status}`);
    }
  } catch (error) {
    console.error('Error obteniendo el historial de transacciones:', error);
    return null;
  }
};


export const activities = [
    
    {
        idTransaction: 1,
        sourceName: 'Jose Luis',
        targetName: 'Emma Garcia',
        amount: -100000.0,
        createdAt: '2024-09-11T10:15:30',
        type: 'TRANSFER'
    },
    {
        idTransaction: 2,
        sourceName: 'Jose Luis',
        targetName: 'Amazon',
        amount: -50000.0,
        createdAt: '2024-09-11T12:30:45',
        type: 'PAYMENT'
    },
    {
        idTransaction: 3,
        sourceName: 'Emma Garcia',
        targetName: 'Jose Luis',
        amount: 20000.0,
        createdAt: '2024-09-10T09:45:00',
        type: 'DEPOSIT'
    },
    {
        idTransaction: 4,
        sourceName: 'Lucia Garcia',
        targetName: 'Jose Luis',
        amount: 20000.0,
        createdAt: '2024-09-13T10:45:00',
        type: 'DEPOSIT'
    },
    {
        idTransaction: 5,
        sourceName: 'Jose Luis',
        targetName: 'Mercado libre',
        amount: -15000.0,
        createdAt: '2024-09-15T16:30:45',
        type: 'PAYMENT'
    },
];