export function fakultet(tall) {
    return tall < 0 ? 1 : tall === 0 ? 1 : tall * fakultet(tall - 1);
}