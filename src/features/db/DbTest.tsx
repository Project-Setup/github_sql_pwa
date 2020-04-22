import React, { FC, ChangeEvent, useState } from 'react';
import test from '../../sql/test';
import { createDbUrl, loadDbFromFile } from '../../sql/connection/connection';
import readAsArrayBuffer from '../../utils/common/readAsArrayBuffer';
import instanceOfArrayBuffer from '../../utils/common/instanceOfArrayBuffer';
import Hello from '../../sql/entities/Hello';

const DbComponent: FC = () => {
  const [dbUrl, setDbUrl] = useState('');

  const handleButtonClick = async () => {
    await test();
    setDbUrl(await createDbUrl({}));
  };

  const handleFileClick = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const dbFile = e.target.files[0];
      const dbBuffer = await readAsArrayBuffer(dbFile);
      if (!instanceOfArrayBuffer(dbBuffer)) {
        return;
      }
      const uInt8Array = new Uint8Array(dbBuffer);
      const connection = await loadDbFromFile({ database: uInt8Array });
      const helloRepository = connection.getRepository(Hello);
      const allRecord = await helloRepository.find();
      console.log(JSON.stringify(allRecord));
    }
  };

  return (
    <div>
      <button type="button" onClick={handleButtonClick}>
        Create a db
      </button>
      {dbUrl && (
        <a href={dbUrl} download="db.sqlite">
          db_link
        </a>
      )}
      <br />
      <input type="file" id="input-db-file" onChange={handleFileClick} />
    </div>
  );
};

export default DbComponent;
