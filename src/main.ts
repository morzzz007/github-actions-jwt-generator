import * as core from '@actions/core';
import * as jwt from 'jsonwebtoken';

async function run() {
  try {
    const secret = core.getInput('secret');
    const payload = core.getInput('payload');
    const token = jwt.sign(payload, secret);

    core.setOutput('jwtToken', token);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
