/**
 * @jest-environment jsdom
 */
 import { pushToHistory } from '../scripts/router.js';

 describe('length of the history stack and the current state object', () => {
    //setting
    test('setting state test: length', () => {
        var set = pushToHistory('settings');
        expect(set.length).toBe(2);
    });
    test('setting state test: state', () => {
        var sett = pushToHistory('settings');
        expect(sett.state).toEqual({page: 'settings'});
    });

    //entry0
    test('entry0 state test: length', () => {
        var e0 = pushToHistory('entry', 0);
        expect(e0.length).toBe(4);
    });
    test('entry0 state test: state', () => {
       var e00 = pushToHistory('entry', 0);
        expect(e00.state).toEqual({page: 'entry0'});
    });

    //entry1
    test('entry1 state test: length', () => {
        var e1 = pushToHistory('entry', 1);
        expect(e1.length).toBe(6);
    });
    test('entry1 state test: state', () => {
       var e11 = pushToHistory('entry', 1);
        expect(e11.state).toEqual({page: 'entry1'});
    });

    //default/blank
    test('default state test: length', () => {
        var d = pushToHistory('default');
        expect(d.length).toBe(8);
    });
    test('default state test: state', () => {
       var d1 = pushToHistory('default');
        expect(d1.state).toEqual({});
    });
 });