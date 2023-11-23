import { IsOptional, IsString } from 'class-validator';

export class CheckoutDTO {
  @IsString()
  idplano: string;

  @IsString()
  ST_NOME_SAC: string;

  @IsString()
  ST_EMAIL_SAC: string;

  @IsString()
  FL_PAGAMENTOPREF_SAC: string;

  @IsString()
  senha: string;

  @IsString()
  senha_confirmacao: string;

  @IsString()
  ST_CGC_SAC: string;

  @IsString()
  ST_RG_SAC: string;

  @IsString()
  ST_INSCMUNICIPAL_SAC: string;

  @IsString()
  ST_DDD_SAC: string;

  @IsString()
  ST_TELEFONE_SAC: string;

  @IsOptional()
  @IsString()
  ST_FAX_SAC: string;

  @IsString()
  ST_PAIS_SAC: string;

  @IsString()
  ST_CEP_SAC: string;

  @IsString()
  ST_ENDERECO_SAC: string;

  @IsString()
  ST_NUMERO_SAC: string;

  @IsString()
  ST_COMPLEMENTO_SAC: string;

  @IsString()
  ST_BAIRRO_SAC: string;

  @IsString()
  ST_CIDADE_SAC: string;

  @IsString()
  ST_ESTADO_SAC: string;

  @IsString()
  FL_MESMOEND_SAC: string;

  @IsString()
  ST_CEPENTREGA_SAC: string;

  @IsString()
  ST_ENDERECOENTREGA_SAC: string;

  @IsString()
  ST_NUMEROENTREGA_SAC: string;

  @IsString()
  ST_COMPLEMENTOENTREGA_SAC: string;

  @IsString()
  ST_BAIRROENTREGA_SAC: string;

  @IsString()
  ST_CIDADEENTREGA_SAC: string;

  @IsString()
  ST_ESTADOENTREGA_SAC: string;

  @IsString()
  ST_PONTOREFERENCIAENTREGA_SAC: string;

  @IsString()
  cupom: string;

  @IsString()
  ID_VENDEDOR_FOR: string;

  @IsString()
  ST_CARTAO_SAC: string;

  @IsString()
  ST_MESVALIDADE_SAC: string;

  @IsString()
  ST_ANOVALIDADE_SAC: string;

  @IsString()
  ST_SEGURANCACARTAO_SAC: string;

  @IsString()
  ST_CARTAOBANDEIRA_SAC: string;

  @IsString()
  ST_NOMECARTAO_SAC: string;

  @IsOptional()
  @IsString()
  ST_BANCO_SAC: string;

  @IsOptional()
  @IsString()
  ST_AGENCIA_SAC: string;

  @IsOptional()
  @IsString()
  ST_CONTABANCARIA_SAC: string;

  @IsString()
  QUANT_PARCELAS_ADESAO: string;

  @IsString()
  trial: string;

  @IsString()
  aceite_contrato: string;
}
