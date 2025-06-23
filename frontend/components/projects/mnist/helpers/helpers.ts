import { modelData } from "../data/modelData"

interface Cell {
    type: string;
    val: number;
}

enum Green {
    sm = '#BDE7DB',
    md = '#7CCFB9',
    lg = '#5CC4A8',
}

enum Red {
    sm = '#fee2e2',
    md = '#fecaca',
    lg = '#ef4444'
}

export const createGrid = (model: number) => {
    const grid: Cell[][] = []
    const currentData = modelData[model].pred

    for (let row = 0; row < 11; row += 1) {
        const gridRow: Cell[] = []
        for (let col = 0; col < 11; col += 1) {
            if (row === 0 && col === 0) {
                gridRow.push({ type: 'empty', val: 0 })
            } else if (row === 0) {
                gridRow.push({ type: 'header', val: col - 1 })
            } else if (col === 0) {
                gridRow.push({ type: 'header', val: row - 1 })
            } else {
                const val = currentData[row - 1][col - 1]
                const type = row === col ? 'diagonal' : 'cell'
                gridRow.push({
                    type: type,
                    val: val
                })
            }
        }
        grid.push(gridRow)
    }
    return grid
}

export const getCellStyle = (cell: Cell) => {
    if (cell.type === 'empty') {
        return { backgroundColor: 'transparent' }
    } else if (cell.type === 'header') {
        return { backgroundColor: 'transparent' }
    } else if (cell.type === 'diagonal') {
        if (cell.val >= 5) {
            return { backgroundColor: Green.lg }
        } else if (cell.val >= 3) {
            return { backgroundColor: Green.md }
        } else if (cell.val >= 1) {
            return { backgroundColor: Green.sm }
        } else {
            return { backgroundColor: '#eaeaea'}
        }
       
    } else {
        if (cell.val >= 5) {
            return { backgroundColor: Red.lg }
        } else if (cell.val >= 3) {
            return { backgroundColor: Red.md }
        } else if (cell.val >= 1) {
            return { backgroundColor: Red.sm }
        } else {
            return { backgroundColor: '#eaeaea'}
        }
    }
}

export const getCellContent = (cell: Cell) => {
    if (cell.type === 'empty') {
        return ''
    } else {
        return cell.val
    }
}

