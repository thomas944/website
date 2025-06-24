// export const summary = [
//     {
//         model: 'cnn',
//         stats: {
//             params: '3,457,162',
//             trainTime: '24.06s',
//             evalTime: '0.08s',
//             trainAcc: '99.23',
//             testAcc: '98.56',
//         },
//         layers: [
//             { name: 'Conv2d-1', dimension: '[-1, 32, 28, 28]' },
//             { name: 'ReLU-2', dimension: '[-1, 32, 28, 28]' },
//             { name: 'Conv2d-3', dimension: '[-1, 64, 28, 28]' },
//             { name: 'ReLU-4', dimension: '[-1, 64, 28, 28]' },
//             { name: 'MaxPool2d-5', dimension: '[-1, 64, 14, 14]' },
//             { name: 'Dropout2d-6', dimension: '[-1, 64, 14, 14]' },
//             { name: 'Conv2d-7', dimension: '[-1, 128, 14, 14]' },
//             { name: 'Conv2d-8', dimension: '[-1, 128, 14, 14]' },
//             { name: 'MaxPool2d-9', dimension: '[-1, 128, 7, 7]' },
//             { name: 'Dropout2d-10', dimension: '[-1, 128, 7, 7]' },
//             { name: 'Flatten-11', dimension: '[-1, 6272]' },
//             { name: 'Linear-12', dimension: '[-1, 512]' },
//             { name: 'Dropout-13', dimension: '[-1, 512]' },
//             { name: 'Linear-14', dimension: '[-1, 10]' }
//         ]
//     },
//     {
//         model: 'mlp',
//         stats: {
//             params: '535,818',
//             trainTime: '15.32s',
//             evalTime: '0.01s',
//             trainAcc: '99.53s',
//             testAcc: '97.65s',
//         },
//         layers: [
//             { name: 'Linear-1', dimension: '[-1, 512]' },
//             { name: 'ReLU-2', dimension: '[-1, 512]' },
//             { name: 'Dropout-3', dimension: '[-1, 512]' },
//             { name: 'Linear-4', dimension: '[-1, 256]' },
//             { name: 'ReLU-5', dimension: '[-1, 256]' },
//             { name: 'Dropout-6', dimension: '[-1, 256]' },
//             { name: 'Linear-7', dimension: '[-1, 10]' }
//         ]
//     },
//     {
//         model: 'lr',
//         stats: {
//             params: '235,146',
//             trainTime: '16.02s',
//             evalTime: '0.01s',
//             trainAcc: '99.46',
//             testAcc: '98.09',
//         },
//         layers: [
//             { name: 'Linear-1', dimension: '[-1, 256]' },
//             { name: 'ReLU-2', dimension: '[-1, 256]' },
//             { name: 'Dropout-3', dimension: '[-1, 256]' },
//             { name: 'Linear-4', dimension: '[-1, 128]' },
//             { name: 'ReLU-5', dimension: '[-1, 128]' },
//             { name: 'Dropout-6', dimension: '[-1, 128]' },
//             { name: 'Linear-7', dimension: '[-1, 10]' }

//         ]
//     }
// ]

export const summary = {
    'CNN': {
        stats: {
            params: '3,457,162',
            size: '15.07 MB',
            trainTime: '24.06s',
            evalTime: '0.08s',
            trainAcc: '99.23',
            testAcc: '98.56',
            layers: [
                { name: 'Conv2d-1', dimension: '[-1, 32, 28, 28]' },
                { name: 'ReLU-2', dimension: '[-1, 32, 28, 28]' },
                { name: 'Conv2d-3', dimension: '[-1, 64, 28, 28]' },
                { name: 'ReLU-4', dimension: '[-1, 64, 28, 28]' },
                { name: 'MaxPool2d-5', dimension: '[-1, 64, 14, 14]' },
                { name: 'Dropout2d-6', dimension: '[-1, 64, 14, 14]' },
                { name: 'Conv2d-7', dimension: '[-1, 128, 14, 14]' },
                { name: 'Conv2d-8', dimension: '[-1, 128, 14, 14]' },
                { name: 'MaxPool2d-9', dimension: '[-1, 128, 7, 7]' },
                { name: 'Dropout2d-10', dimension: '[-1, 128, 7, 7]' },
                { name: 'Flatten-11', dimension: '[-1, 6272]' },
                { name: 'Linear-12', dimension: '[-1, 512]' },
                { name: 'Dropout-13', dimension: '[-1, 512]' },
                { name: 'Linear-14', dimension: '[-1, 10]' }
            ]
        },
    },
    'MLP': {
        stats: {
            params: '535,818',
            size: '2.06 MB',
            trainTime: '15.32s',
            evalTime: '0.01s',
            trainAcc: '99.53s',
            testAcc: '97.65s',
            layers: [
                { name: 'Linear-1', dimension: '[-1, 512]' },
                { name: 'ReLU-2', dimension: '[-1, 512]' },
                { name: 'Dropout-3', dimension: '[-1, 512]' },
                { name: 'Linear-4', dimension: '[-1, 256]' },
                { name: 'ReLU-5', dimension: '[-1, 256]' },
                { name: 'Dropout-6', dimension: '[-1, 256]' },
                { name: 'Linear-7', dimension: '[-1, 10]' }
            ]
        },
    },
    'LR': {
        stats: {
            params: '235,146',
            size: '0.91 MB',
            trainTime: '16.02s',
            evalTime: '0.01s',
            trainAcc: '99.46',
            testAcc: '98.09',
            layers: [
                { name: 'Linear-1', dimension: '[-1, 256]' },
                { name: 'ReLU-2', dimension: '[-1, 256]' },
                { name: 'Dropout-3', dimension: '[-1, 256]' },
                { name: 'Linear-4', dimension: '[-1, 128]' },
                { name: 'ReLU-5', dimension: '[-1, 128]' },
                { name: 'Dropout-6', dimension: '[-1, 128]' },
                { name: 'Linear-7', dimension: '[-1, 10]' }
            ]
        },
    }
}