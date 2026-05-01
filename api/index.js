export const config = { runtime: "edge" };

const _0x1a = ['\x54\x41\x52\x47\x45\x54\x5f\x44\x4f\x4d\x41\x49\x4e', '\x68\x6f\x73\x74', '\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e', '\x78\x2d\x76\x65\x72\x63\x65\x6c\x2d', '\x78\x2d\x72\x65\x61\x6c\x2d\x69\x70', '\x78\x2d\x66\x6f\x72\x77\x61\x72\x64\x65\x64\x2d\x66\x6f\x72', '\x68\x61\x6c\x66', '\x6d\x61\x6e\x75\x61\x6c', '\x68\x74\x74\x70\x73\x3a\x2f\x2f', '\x47\x45\x54', '\x48\x45\x41\x44'];
const _0x3f = (n) => _0x1a[n];

const _0xbb2 = (process.env[_0x3f(0)] || "")['replace'](/\/$/, "");

export default async function (req) {
  if (!_0xbb2) return new Response(null, { status: 404 });

  try {
    const _0xcc = req.url.indexOf("/", 8);
    const _0xurl = _0xcc === -1 ? _0xbb2 + "/" : _0xbb2 + req.url.slice(_0xcc);
    
    const _0xh = new Headers();
    let _0xip = null;

    for (const [k, v] of req.headers) {
      const _0xl = k.toLowerCase();
      if (['host', 'connection', 'keep-alive', 'proxy-authenticate', 'te', 'trailer', 'upgrade'].includes(_0xl) || _0xl.startsWith(_0x3f(3))) continue;
      
      if (_0xl === _0x3f(4)) { _0xip = v; continue; }
      if (_0xl === _0x3f(5)) { if (!_0xip) _0xip = v; continue; }
      
      _0xh.set(k, v);
    }

    if (_0xip) _0xh.set(_0x3f(5), _0xip);

    const _0xm = req.method;
    const _0xb = ![_0x3f(9), _0x3f(10)].includes(_0xm);

    return await fetch(_0xurl, {
      method: _0xm,
      headers: _0xh,
      body: _0xb ? req.body : undefined,
      duplex: _0x3f(6),
      redirect: _0x3f(7)
    });
  } catch (err) {
    return new Response(null, { status: 502 });
  }
}
