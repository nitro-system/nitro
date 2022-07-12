import { trackById } from './track-by-id.utils';

describe('trackById', () => {
  it('should work', () => {
    // Valid Value
    expect(trackById(12, { id: '25' })).toEqual('25');
    expect(trackById(12, { id: '651' })).toEqual('651');
    expect(trackById(12, { id: '1651' })).toEqual('1651');
    expect(trackById(12, { id: 56058 })).toEqual(56058);
    expect(trackById(12, { id: 809185 })).toEqual(809185);

    // Invalid Value
    expect(trackById(12, { id: '65531' })).not.toEqual('61451');
    expect(trackById(12, { id: '162551' })).not.toEqual('1612351');
    expect(trackById(12, { id: 1556058 })).not.toEqual(56124058);
    expect(trackById(12, { id: 809215185 })).not.toEqual(80912585);
  });
});
