let data = [];

class Shorts {
  static addOne(name, url, author = null) {
    const short = { name, url, author };
    data.push(short);
    return short;
  }

  static findOne(name) {
    return data.filter(short => short.name === name)[0];
  }

  static updateOne(name, newData) {
    const short = Shorts.findOne(name);
    if (short) {
      if (newData.name) short.name = newData.name;
      if (newData.url) short.url = newData.url;
    }
    return short;
  }

  static deleteOne(name) {
    const short = Shorts.findOne(name);
    data = data.filter(s => s.name !== name);
    return short;
  }

  static findAll() {
    return data;
  }
}

module.exports = Shorts;
