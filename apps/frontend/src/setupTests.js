// Ensure Vitest's expect is available globally before loading jest-dom
import { expect } from 'vitest';
globalThis.expect = expect;
import '@testing-library/jest-dom';
