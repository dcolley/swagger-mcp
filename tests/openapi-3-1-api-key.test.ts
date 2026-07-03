import SwaggerParser from '@apidevtools/swagger-parser';
import path from 'path';

describe('OpenAPI 3.1 API key fixtures', () => {
  it('parses the Xquik fixture with header API key auth', async () => {
    const fixturePath = path.join(process.cwd(), 'examples', 'xquik-openapi-3-1.json');
    const spec = await SwaggerParser.parse(fixturePath) as any;

    expect(spec.openapi).toBe('3.1.0');
    expect(spec.info.title).toBe('Xquik API');
    expect(spec.paths['/api/v1/x/tweets/search'].get.operationId).toBe('searchTweets');
    expect(spec.components.securitySchemes.apiKey).toMatchObject({
      type: 'apiKey',
      in: 'header',
      name: 'x-api-key',
    });
  });
});
