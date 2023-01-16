export default function padLeft(value, pad='0') {
    return value < 10 ? pad + value : value
}