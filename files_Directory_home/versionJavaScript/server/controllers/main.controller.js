export const getHTMLIndex = async (req, res) => {
    res.sendFile(process.cwd() + '/client/index.html');
};

export const getIndexJs = async (req, res) => {
    res.sendFile(process.cwd() + '/client/scripts/index.js');
};

export const getIndexCss = async (req, res) => {
    res.sendFile(process.cwd() + '/client/styles/index.css');
};
