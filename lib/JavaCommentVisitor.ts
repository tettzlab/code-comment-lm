/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  BaseJavaCstVisitorWithDefaults,
  CstNode,
  IToken,
  AdditionalBoundCtx,
  AmbiguousNameCtx,
  AnnotationCtx,
  AnnotationInterfaceBodyCtx,
  AnnotationInterfaceDeclarationCtx,
  AnnotationInterfaceElementDeclarationCtx,
  AnnotationInterfaceElementModifierCtx,
  AnnotationInterfaceMemberDeclarationCtx,
  ArgumentListCtx,
  ArrayAccessSuffixCtx,
  ArrayCreationExpressionCtx,
  ArrayCreationExpressionWithoutInitializerSuffixCtx,
  ArrayCreationWithInitializerSuffixCtx,
  ArrayInitializerCtx,
  AssertStatementCtx,
  BasicForStatementCtx,
  BinaryExpressionCtx,
  BlockCtx,
  BlockStatementCtx,
  BlockStatementsCtx,
  BooleanLiteralCtx,
  BreakStatementCtx,
  CaseConstantCtx,
  CasePatternCtx,
  CastExpressionCtx,
  CatchClauseCtx,
  CatchesCtx,
  CatchFormalParameterCtx,
  CatchTypeCtx,
  ClassBodyCtx,
  ClassBodyDeclarationCtx,
  ClassDeclarationCtx,
  ClassExtendsCtx,
  ClassImplementsCtx,
  ClassLiteralSuffixCtx,
  ClassMemberDeclarationCtx,
  ClassModifierCtx,
  ClassOrInterfaceTypeCtx,
  ClassOrInterfaceTypeToInstantiateCtx,
  ClassPermitsCtx,
  ClassTypeCtx,
  CompactConstructorDeclarationCtx,
  CompilationUnitCtx,
  ComponentPatternCtx,
  ComponentPatternListCtx,
  ConciseLambdaParameterCtx,
  ConciseLambdaParameterListCtx,
  ConditionalExpressionCtx,
  ConstantDeclarationCtx,
  ConstantModifierCtx,
  ConstructorBodyCtx,
  ConstructorDeclarationCtx,
  ConstructorDeclaratorCtx,
  ConstructorModifierCtx,
  ContinueStatementCtx,
  DefaultValueCtx,
  DiamondCtx,
  DimExprCtx,
  DimExprsCtx,
  DimsCtx,
  DoStatementCtx,
  ElementValueArrayInitializerCtx,
  ElementValueCtx,
  ElementValueListCtx,
  ElementValuePairCtx,
  ElementValuePairListCtx,
  EmbeddedExpressionCtx,
  EmptyStatementCtx,
  EnhancedForStatementCtx,
  EnumBodyCtx,
  EnumBodyDeclarationsCtx,
  EnumConstantCtx,
  EnumConstantListCtx,
  EnumConstantModifierCtx,
  EnumDeclarationCtx,
  ExceptionTypeCtx,
  ExceptionTypeListCtx,
  ExplicitConstructorInvocationCtx,
  ExportsModuleDirectiveCtx,
  ExpressionCtx,
  ExpressionNameCtx,
  ExpressionStatementCtx,
  FieldDeclarationCtx,
  FieldModifierCtx,
  FinallyCtx,
  FloatingPointLiteralCtx,
  FloatingPointTypeCtx,
  ForInitCtx,
  FormalParameterCtx,
  FormalParameterListCtx,
  ForStatementCtx,
  ForUpdateCtx,
  FqnOrRefTypeCtx,
  FqnOrRefTypePartCommonCtx,
  FqnOrRefTypePartFirstCtx,
  FqnOrRefTypePartRestCtx,
  GuardCtx,
  IfStatementCtx,
  ImportDeclarationCtx,
  InstanceInitializerCtx,
  IntegerLiteralCtx,
  IntegralTypeCtx,
  InterfaceBodyCtx,
  InterfaceDeclarationCtx,
  InterfaceExtendsCtx,
  InterfaceMemberDeclarationCtx,
  InterfaceMethodDeclarationCtx,
  InterfaceMethodModifierCtx,
  InterfaceModifierCtx,
  InterfacePermitsCtx,
  InterfaceTypeCtx,
  InterfaceTypeListCtx,
  IsDimsCtx,
  IsRefTypeInMethodRefCtx,
  LabeledStatementCtx,
  LambdaBodyCtx,
  LambdaExpressionCtx,
  LambdaParameterCtx,
  LambdaParameterListCtx,
  LambdaParametersCtx,
  LambdaParametersWithBracesCtx,
  LambdaParameterTypeCtx,
  LiteralCtx,
  LocalVariableDeclarationCtx,
  LocalVariableDeclarationStatementCtx,
  LocalVariableTypeCtx,
  MatchAllPatternCtx,
  MethodBodyCtx,
  MethodDeclarationCtx,
  MethodDeclaratorCtx,
  MethodHeaderCtx,
  MethodInvocationSuffixCtx,
  MethodModifierCtx,
  MethodNameCtx,
  MethodReferenceSuffixCtx,
  ModularCompilationUnitCtx,
  ModuleDeclarationCtx,
  ModuleDirectiveCtx,
  ModuleNameCtx,
  NewExpressionCtx,
  NormalClassDeclarationCtx,
  NormalInterfaceDeclarationCtx,
  NormalLambdaParameterListCtx,
  NumericTypeCtx,
  OpensModuleDirectiveCtx,
  OrdinaryCompilationUnitCtx,
  PackageDeclarationCtx,
  PackageModifierCtx,
  PackageNameCtx,
  PackageOrTypeNameCtx,
  ParenthesisExpressionCtx,
  PatternCtx,
  PrimaryCtx,
  PrimaryPrefixCtx,
  PrimarySuffixCtx,
  PrimitiveCastExpressionCtx,
  PrimitiveTypeCtx,
  ProvidesModuleDirectiveCtx,
  QualifiedExplicitConstructorInvocationCtx,
  ReceiverParameterCtx,
  RecordBodyCtx,
  RecordBodyDeclarationCtx,
  RecordComponentCtx,
  RecordComponentListCtx,
  RecordComponentModifierCtx,
  RecordDeclarationCtx,
  RecordHeaderCtx,
  RecordPatternCtx,
  ReferenceTypeCastExpressionCtx,
  ReferenceTypeCtx,
  RegularLambdaParameterCtx,
  RequiresModifierCtx,
  RequiresModuleDirectiveCtx,
  ResourceCtx,
  ResourceListCtx,
  ResourceSpecificationCtx,
  ResultCtx,
  ReturnStatementCtx,
  SimpleTypeNameCtx,
  StatementCtx,
  StatementExpressionCtx,
  StatementExpressionListCtx,
  StatementWithoutTrailingSubstatementCtx,
  StaticInitializerCtx,
  StringTemplateCtx,
  SwitchBlockCtx,
  SwitchBlockStatementGroupCtx,
  SwitchLabelCtx,
  SwitchRuleCtx,
  SwitchStatementCtx,
  SynchronizedStatementCtx,
  TemplateArgumentCtx,
  TemplateCtx,
  TextBlockTemplateCtx,
  ThrowsCtx,
  ThrowStatementCtx,
  TryStatementCtx,
  TryWithResourcesStatementCtx,
  TypeArgumentCtx,
  TypeArgumentListCtx,
  TypeArgumentsCtx,
  TypeArgumentsOrDiamondCtx,
  TypeBoundCtx,
  TypeDeclarationCtx,
  TypeIdentifierCtx,
  TypeNameCtx,
  TypeParameterCtx,
  TypeParameterListCtx,
  TypeParameterModifierCtx,
  TypeParametersCtx,
  TypePatternCtx,
  TypeVariableCtx,
  UnannClassOrInterfaceTypeCtx,
  UnannClassTypeCtx,
  UnannInterfaceTypeCtx,
  UnannPrimitiveTypeCtx,
  UnannPrimitiveTypeWithOptionalDimsSuffixCtx,
  UnannReferenceTypeCtx,
  UnannTypeCtx,
  UnannTypeVariableCtx,
  UnaryExpressionCtx,
  UnaryExpressionNotPlusMinusCtx,
  UnqualifiedClassInstanceCreationExpressionCtx,
  UnqualifiedExplicitConstructorInvocationCtx,
  UsesModuleDirectiveCtx,
  VariableAccessCtx,
  VariableArityParameterCtx,
  VariableArityRecordComponentCtx,
  VariableDeclaratorCtx,
  VariableDeclaratorIdCtx,
  VariableDeclaratorListCtx,
  VariableInitializerCtx,
  VariableInitializerListCtx,
  VariableModifierCtx,
  VariableParaRegularParameterCtx,
  WhileStatementCtx,
  WildcardBoundsCtx,
  WildcardCtx,
  YieldStatementCtx,
} from 'java-parser'

function storeComments(ctx: Record<string, CstNode[] | IToken[]>, comments: IToken[]): any {
  const attrNames = Object.keys(ctx)
  for (let i = 0, numAttrNames = attrNames.length; i < numAttrNames; i++) {
    const attrName = attrNames[i]
    const attrValues = ctx[attrName]
    for (let j = 0, numAttrValues = attrValues.length; j < numAttrValues; j++) {
      const attrValue: CstNode | IToken = attrValues[j]
      if (attrValue.leadingComments != null && attrValue.leadingComments.length > 0) {
        comments.push(...attrValue.leadingComments)
      }
      if (attrValue.trailingComments != null && attrValue.trailingComments.length > 0) {
        comments.push(...attrValue.trailingComments)
      }
    }
  }
}

export const LINE_COMMENT = 13
export const TRADITIONAL_COMMENT = 14

export class JavaCommentVisitor extends BaseJavaCstVisitorWithDefaults {
  public constructor() {
    super()
    this.validateVisitor()
  }

  public visit(cstNode: CstNode | CstNode[], param?: IToken[]): IToken[] {
    if (param == null) {
      param = []
    }
    super.visit(cstNode, param)
    // Note that `IToken.tokenTypeIdx` should be:
    //  - 13 for LineComment
    //  - 14 for TraditionalComment
    //  - else otherwise.
    const comments = param
      .filter(
        (token) =>
          token.tokenTypeIdx === LINE_COMMENT || token.tokenTypeIdx === TRADITIONAL_COMMENT,
      )
      .sort((a, b) => a.startOffset - b.startOffset)
    return comments
  }

  public typeIdentifier(ctx: TypeIdentifierCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.typeIdentifier(ctx, param)
  }
  public literal(ctx: LiteralCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.literal(ctx, param)
  }
  public integerLiteral(ctx: IntegerLiteralCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.integerLiteral(ctx, param)
  }
  public floatingPointLiteral(ctx: FloatingPointLiteralCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.floatingPointLiteral(ctx, param)
  }
  public booleanLiteral(ctx: BooleanLiteralCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.booleanLiteral(ctx, param)
  }
  public primitiveType(ctx: PrimitiveTypeCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.primitiveType(ctx, param)
  }
  public numericType(ctx: NumericTypeCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.numericType(ctx, param)
  }
  public integralType(ctx: IntegralTypeCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.integralType(ctx, param)
  }
  public floatingPointType(ctx: FloatingPointTypeCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.floatingPointType(ctx, param)
  }
  public referenceType(ctx: ReferenceTypeCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.referenceType(ctx, param)
  }
  public classOrInterfaceType(ctx: ClassOrInterfaceTypeCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.classOrInterfaceType(ctx, param)
  }
  public classType(ctx: ClassTypeCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.classType(ctx, param)
  }
  public interfaceType(ctx: InterfaceTypeCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.interfaceType(ctx, param)
  }
  public typeVariable(ctx: TypeVariableCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.typeVariable(ctx, param)
  }
  public dims(ctx: DimsCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.dims(ctx, param)
  }
  public typeParameter(ctx: TypeParameterCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.typeParameter(ctx, param)
  }
  public typeParameterModifier(ctx: TypeParameterModifierCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.typeParameterModifier(ctx, param)
  }
  public typeBound(ctx: TypeBoundCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.typeBound(ctx, param)
  }
  public additionalBound(ctx: AdditionalBoundCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.additionalBound(ctx, param)
  }
  public typeArguments(ctx: TypeArgumentsCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.typeArguments(ctx, param)
  }
  public typeArgumentList(ctx: TypeArgumentListCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.typeArgumentList(ctx, param)
  }
  public typeArgument(ctx: TypeArgumentCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.typeArgument(ctx, param)
  }
  public wildcard(ctx: WildcardCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.wildcard(ctx, param)
  }
  public wildcardBounds(ctx: WildcardBoundsCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.wildcardBounds(ctx, param)
  }
  public moduleName(ctx: ModuleNameCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.moduleName(ctx, param)
  }
  public packageName(ctx: PackageNameCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.packageName(ctx, param)
  }
  public typeName(ctx: TypeNameCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.typeName(ctx, param)
  }
  public expressionName(ctx: ExpressionNameCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.expressionName(ctx, param)
  }
  public methodName(ctx: MethodNameCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.methodName(ctx, param)
  }
  public packageOrTypeName(ctx: PackageOrTypeNameCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.packageOrTypeName(ctx, param)
  }
  public ambiguousName(ctx: AmbiguousNameCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.ambiguousName(ctx, param)
  }
  public classDeclaration(ctx: ClassDeclarationCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.classDeclaration(ctx, param)
  }
  public normalClassDeclaration(ctx: NormalClassDeclarationCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.normalClassDeclaration(ctx, param)
  }
  public classModifier(ctx: ClassModifierCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.classModifier(ctx, param)
  }
  public typeParameters(ctx: TypeParametersCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.typeParameters(ctx, param)
  }
  public typeParameterList(ctx: TypeParameterListCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.typeParameterList(ctx, param)
  }
  public classExtends(ctx: ClassExtendsCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.classExtends(ctx, param)
  }
  public classImplements(ctx: ClassImplementsCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.classImplements(ctx, param)
  }
  public interfaceTypeList(ctx: InterfaceTypeListCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.interfaceTypeList(ctx, param)
  }
  public classPermits(ctx: ClassPermitsCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.classPermits(ctx, param)
  }
  public classBody(ctx: ClassBodyCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.classBody(ctx, param)
  }
  public classBodyDeclaration(ctx: ClassBodyDeclarationCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.classBodyDeclaration(ctx, param)
  }
  public classMemberDeclaration(ctx: ClassMemberDeclarationCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.classMemberDeclaration(ctx, param)
  }
  public fieldDeclaration(ctx: FieldDeclarationCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.fieldDeclaration(ctx, param)
  }
  public fieldModifier(ctx: FieldModifierCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.fieldModifier(ctx, param)
  }
  public variableDeclaratorList(ctx: VariableDeclaratorListCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.variableDeclaratorList(ctx, param)
  }
  public variableDeclarator(ctx: VariableDeclaratorCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.variableDeclarator(ctx, param)
  }
  public variableDeclaratorId(ctx: VariableDeclaratorIdCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.variableDeclaratorId(ctx, param)
  }
  public variableInitializer(ctx: VariableInitializerCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.variableInitializer(ctx, param)
  }
  public unannType(ctx: UnannTypeCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.unannType(ctx, param)
  }
  public unannPrimitiveTypeWithOptionalDimsSuffix(
    ctx: UnannPrimitiveTypeWithOptionalDimsSuffixCtx,
    param?: any,
  ): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.unannPrimitiveTypeWithOptionalDimsSuffix(ctx, param)
  }
  public unannPrimitiveType(ctx: UnannPrimitiveTypeCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.unannPrimitiveType(ctx, param)
  }
  public unannReferenceType(ctx: UnannReferenceTypeCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.unannReferenceType(ctx, param)
  }
  public unannClassOrInterfaceType(ctx: UnannClassOrInterfaceTypeCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.unannClassOrInterfaceType(ctx, param)
  }
  public unannClassType(ctx: UnannClassTypeCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.unannClassType(ctx, param)
  }
  public unannInterfaceType(ctx: UnannInterfaceTypeCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.unannInterfaceType(ctx, param)
  }
  public unannTypeVariable(ctx: UnannTypeVariableCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.unannTypeVariable(ctx, param)
  }
  public methodDeclaration(ctx: MethodDeclarationCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.methodDeclaration(ctx, param)
  }
  public methodModifier(ctx: MethodModifierCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.methodModifier(ctx, param)
  }
  public methodHeader(ctx: MethodHeaderCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.methodHeader(ctx, param)
  }
  public result(ctx: ResultCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.result(ctx, param)
  }
  public methodDeclarator(ctx: MethodDeclaratorCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.methodDeclarator(ctx, param)
  }
  public receiverParameter(ctx: ReceiverParameterCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.receiverParameter(ctx, param)
  }
  public formalParameterList(ctx: FormalParameterListCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.formalParameterList(ctx, param)
  }
  public formalParameter(ctx: FormalParameterCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.formalParameter(ctx, param)
  }
  public variableParaRegularParameter(ctx: VariableParaRegularParameterCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.variableParaRegularParameter(ctx, param)
  }
  public variableArityParameter(ctx: VariableArityParameterCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.variableArityParameter(ctx, param)
  }
  public variableModifier(ctx: VariableModifierCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.variableModifier(ctx, param)
  }
  public throws(ctx: ThrowsCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.throws(ctx, param)
  }
  public exceptionTypeList(ctx: ExceptionTypeListCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.exceptionTypeList(ctx, param)
  }
  public exceptionType(ctx: ExceptionTypeCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.exceptionType(ctx, param)
  }
  public methodBody(ctx: MethodBodyCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.methodBody(ctx, param)
  }
  public instanceInitializer(ctx: InstanceInitializerCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.instanceInitializer(ctx, param)
  }
  public staticInitializer(ctx: StaticInitializerCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.staticInitializer(ctx, param)
  }
  public constructorDeclaration(ctx: ConstructorDeclarationCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.constructorDeclaration(ctx, param)
  }
  public constructorModifier(ctx: ConstructorModifierCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.constructorModifier(ctx, param)
  }
  public constructorDeclarator(ctx: ConstructorDeclaratorCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.constructorDeclarator(ctx, param)
  }
  public simpleTypeName(ctx: SimpleTypeNameCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.simpleTypeName(ctx, param)
  }
  public constructorBody(ctx: ConstructorBodyCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.constructorBody(ctx, param)
  }
  public explicitConstructorInvocation(ctx: ExplicitConstructorInvocationCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.explicitConstructorInvocation(ctx, param)
  }
  public unqualifiedExplicitConstructorInvocation(
    ctx: UnqualifiedExplicitConstructorInvocationCtx,
    param?: any,
  ): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.unqualifiedExplicitConstructorInvocation(ctx, param)
  }
  public qualifiedExplicitConstructorInvocation(
    ctx: QualifiedExplicitConstructorInvocationCtx,
    param?: any,
  ): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.qualifiedExplicitConstructorInvocation(ctx, param)
  }
  public enumDeclaration(ctx: EnumDeclarationCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.enumDeclaration(ctx, param)
  }
  public enumBody(ctx: EnumBodyCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.enumBody(ctx, param)
  }
  public enumConstantList(ctx: EnumConstantListCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.enumConstantList(ctx, param)
  }
  public enumConstant(ctx: EnumConstantCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.enumConstant(ctx, param)
  }
  public enumConstantModifier(ctx: EnumConstantModifierCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.enumConstantModifier(ctx, param)
  }
  public enumBodyDeclarations(ctx: EnumBodyDeclarationsCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.enumBodyDeclarations(ctx, param)
  }
  public recordDeclaration(ctx: RecordDeclarationCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.recordDeclaration(ctx, param)
  }
  public recordHeader(ctx: RecordHeaderCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.recordHeader(ctx, param)
  }
  public recordComponentList(ctx: RecordComponentListCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.recordComponentList(ctx, param)
  }
  public recordComponent(ctx: RecordComponentCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.recordComponent(ctx, param)
  }
  public variableArityRecordComponent(ctx: VariableArityRecordComponentCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.variableArityRecordComponent(ctx, param)
  }
  public recordComponentModifier(ctx: RecordComponentModifierCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.recordComponentModifier(ctx, param)
  }
  public recordBody(ctx: RecordBodyCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.recordBody(ctx, param)
  }
  public recordBodyDeclaration(ctx: RecordBodyDeclarationCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.recordBodyDeclaration(ctx, param)
  }
  public compactConstructorDeclaration(ctx: CompactConstructorDeclarationCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.compactConstructorDeclaration(ctx, param)
  }
  public isDims(ctx: IsDimsCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.isDims(ctx, param)
  }
  public compilationUnit(ctx: CompilationUnitCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.compilationUnit(ctx, param)
  }
  public ordinaryCompilationUnit(ctx: OrdinaryCompilationUnitCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.ordinaryCompilationUnit(ctx, param)
  }
  public modularCompilationUnit(ctx: ModularCompilationUnitCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.modularCompilationUnit(ctx, param)
  }
  public packageDeclaration(ctx: PackageDeclarationCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.packageDeclaration(ctx, param)
  }
  public packageModifier(ctx: PackageModifierCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.packageModifier(ctx, param)
  }
  public importDeclaration(ctx: ImportDeclarationCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.importDeclaration(ctx, param)
  }
  public typeDeclaration(ctx: TypeDeclarationCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.typeDeclaration(ctx, param)
  }
  public moduleDeclaration(ctx: ModuleDeclarationCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.moduleDeclaration(ctx, param)
  }
  public moduleDirective(ctx: ModuleDirectiveCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.moduleDirective(ctx, param)
  }
  public requiresModuleDirective(ctx: RequiresModuleDirectiveCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.requiresModuleDirective(ctx, param)
  }
  public exportsModuleDirective(ctx: ExportsModuleDirectiveCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.exportsModuleDirective(ctx, param)
  }
  public opensModuleDirective(ctx: OpensModuleDirectiveCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.opensModuleDirective(ctx, param)
  }
  public usesModuleDirective(ctx: UsesModuleDirectiveCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.usesModuleDirective(ctx, param)
  }
  public providesModuleDirective(ctx: ProvidesModuleDirectiveCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.providesModuleDirective(ctx, param)
  }
  public requiresModifier(ctx: RequiresModifierCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.requiresModifier(ctx, param)
  }
  public interfaceDeclaration(ctx: InterfaceDeclarationCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.interfaceDeclaration(ctx, param)
  }
  public normalInterfaceDeclaration(ctx: NormalInterfaceDeclarationCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.normalInterfaceDeclaration(ctx, param)
  }
  public interfaceModifier(ctx: InterfaceModifierCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.interfaceModifier(ctx, param)
  }
  public interfaceExtends(ctx: InterfaceExtendsCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.interfaceExtends(ctx, param)
  }
  public interfacePermits(ctx: InterfacePermitsCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.interfacePermits(ctx, param)
  }
  public interfaceBody(ctx: InterfaceBodyCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.interfaceBody(ctx, param)
  }
  public interfaceMemberDeclaration(ctx: InterfaceMemberDeclarationCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.interfaceMemberDeclaration(ctx, param)
  }
  public constantDeclaration(ctx: ConstantDeclarationCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.constantDeclaration(ctx, param)
  }
  public constantModifier(ctx: ConstantModifierCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.constantModifier(ctx, param)
  }
  public interfaceMethodDeclaration(ctx: InterfaceMethodDeclarationCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.interfaceMethodDeclaration(ctx, param)
  }
  public interfaceMethodModifier(ctx: InterfaceMethodModifierCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.interfaceMethodModifier(ctx, param)
  }
  public annotationInterfaceDeclaration(ctx: AnnotationInterfaceDeclarationCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.annotationInterfaceDeclaration(ctx, param)
  }
  public annotationInterfaceBody(ctx: AnnotationInterfaceBodyCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.annotationInterfaceBody(ctx, param)
  }
  public annotationInterfaceMemberDeclaration(
    ctx: AnnotationInterfaceMemberDeclarationCtx,
    param?: any,
  ): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.annotationInterfaceMemberDeclaration(ctx, param)
  }
  public annotationInterfaceElementDeclaration(
    ctx: AnnotationInterfaceElementDeclarationCtx,
    param?: any,
  ): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.annotationInterfaceElementDeclaration(ctx, param)
  }
  public annotationInterfaceElementModifier(
    ctx: AnnotationInterfaceElementModifierCtx,
    param?: any,
  ): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.annotationInterfaceElementModifier(ctx, param)
  }
  public defaultValue(ctx: DefaultValueCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.defaultValue(ctx, param)
  }
  public annotation(ctx: AnnotationCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.annotation(ctx, param)
  }
  public elementValuePairList(ctx: ElementValuePairListCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.elementValuePairList(ctx, param)
  }
  public elementValuePair(ctx: ElementValuePairCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.elementValuePair(ctx, param)
  }
  public elementValue(ctx: ElementValueCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.elementValue(ctx, param)
  }
  public elementValueArrayInitializer(ctx: ElementValueArrayInitializerCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.elementValueArrayInitializer(ctx, param)
  }
  public elementValueList(ctx: ElementValueListCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.elementValueList(ctx, param)
  }
  public arrayInitializer(ctx: ArrayInitializerCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.arrayInitializer(ctx, param)
  }
  public variableInitializerList(ctx: VariableInitializerListCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.variableInitializerList(ctx, param)
  }
  public block(ctx: BlockCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.block(ctx, param)
  }
  public blockStatements(ctx: BlockStatementsCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.blockStatements(ctx, param)
  }
  public blockStatement(ctx: BlockStatementCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.blockStatement(ctx, param)
  }
  public localVariableDeclarationStatement(
    ctx: LocalVariableDeclarationStatementCtx,
    param?: any,
  ): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.localVariableDeclarationStatement(ctx, param)
  }
  public localVariableDeclaration(ctx: LocalVariableDeclarationCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.localVariableDeclaration(ctx, param)
  }
  public localVariableType(ctx: LocalVariableTypeCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.localVariableType(ctx, param)
  }
  public statement(ctx: StatementCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.statement(ctx, param)
  }
  public statementWithoutTrailingSubstatement(
    ctx: StatementWithoutTrailingSubstatementCtx,
    param?: any,
  ): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.statementWithoutTrailingSubstatement(ctx, param)
  }
  public emptyStatement(ctx: EmptyStatementCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.emptyStatement(ctx, param)
  }
  public labeledStatement(ctx: LabeledStatementCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.labeledStatement(ctx, param)
  }
  public expressionStatement(ctx: ExpressionStatementCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.expressionStatement(ctx, param)
  }
  public statementExpression(ctx: StatementExpressionCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.statementExpression(ctx, param)
  }
  public ifStatement(ctx: IfStatementCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.ifStatement(ctx, param)
  }
  public assertStatement(ctx: AssertStatementCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.assertStatement(ctx, param)
  }
  public switchStatement(ctx: SwitchStatementCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.switchStatement(ctx, param)
  }
  public switchBlock(ctx: SwitchBlockCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.switchBlock(ctx, param)
  }
  public switchBlockStatementGroup(ctx: SwitchBlockStatementGroupCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.switchBlockStatementGroup(ctx, param)
  }
  public switchLabel(ctx: SwitchLabelCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.switchLabel(ctx, param)
  }
  public switchRule(ctx: SwitchRuleCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.switchRule(ctx, param)
  }
  public caseConstant(ctx: CaseConstantCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.caseConstant(ctx, param)
  }
  public casePattern(ctx: CasePatternCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.casePattern(ctx, param)
  }
  public whileStatement(ctx: WhileStatementCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.whileStatement(ctx, param)
  }
  public doStatement(ctx: DoStatementCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.doStatement(ctx, param)
  }
  public forStatement(ctx: ForStatementCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.forStatement(ctx, param)
  }
  public basicForStatement(ctx: BasicForStatementCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.basicForStatement(ctx, param)
  }
  public forInit(ctx: ForInitCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.forInit(ctx, param)
  }
  public forUpdate(ctx: ForUpdateCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.forUpdate(ctx, param)
  }
  public statementExpressionList(ctx: StatementExpressionListCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.statementExpressionList(ctx, param)
  }
  public enhancedForStatement(ctx: EnhancedForStatementCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.enhancedForStatement(ctx, param)
  }
  public breakStatement(ctx: BreakStatementCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.breakStatement(ctx, param)
  }
  public continueStatement(ctx: ContinueStatementCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.continueStatement(ctx, param)
  }
  public returnStatement(ctx: ReturnStatementCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.returnStatement(ctx, param)
  }
  public throwStatement(ctx: ThrowStatementCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.throwStatement(ctx, param)
  }
  public synchronizedStatement(ctx: SynchronizedStatementCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.synchronizedStatement(ctx, param)
  }
  public tryStatement(ctx: TryStatementCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.tryStatement(ctx, param)
  }
  public catches(ctx: CatchesCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.catches(ctx, param)
  }
  public catchClause(ctx: CatchClauseCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.catchClause(ctx, param)
  }
  public catchFormalParameter(ctx: CatchFormalParameterCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.catchFormalParameter(ctx, param)
  }
  public catchType(ctx: CatchTypeCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.catchType(ctx, param)
  }
  public finally(ctx: FinallyCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.finally(ctx, param)
  }
  public tryWithResourcesStatement(ctx: TryWithResourcesStatementCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.tryWithResourcesStatement(ctx, param)
  }
  public resourceSpecification(ctx: ResourceSpecificationCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.resourceSpecification(ctx, param)
  }
  public resourceList(ctx: ResourceListCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.resourceList(ctx, param)
  }
  public resource(ctx: ResourceCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.resource(ctx, param)
  }
  public yieldStatement(ctx: YieldStatementCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.yieldStatement(ctx, param)
  }
  public variableAccess(ctx: VariableAccessCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.variableAccess(ctx, param)
  }
  public expression(ctx: ExpressionCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.expression(ctx, param)
  }
  public lambdaExpression(ctx: LambdaExpressionCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.lambdaExpression(ctx, param)
  }
  public lambdaParameters(ctx: LambdaParametersCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.lambdaParameters(ctx, param)
  }
  public lambdaParametersWithBraces(ctx: LambdaParametersWithBracesCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.lambdaParametersWithBraces(ctx, param)
  }
  public lambdaParameterList(ctx: LambdaParameterListCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.lambdaParameterList(ctx, param)
  }
  public conciseLambdaParameterList(ctx: ConciseLambdaParameterListCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.conciseLambdaParameterList(ctx, param)
  }
  public normalLambdaParameterList(ctx: NormalLambdaParameterListCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.normalLambdaParameterList(ctx, param)
  }
  public normalLambdaParameter(ctx: LambdaParameterCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.normalLambdaParameter(ctx, param)
  }
  public regularLambdaParameter(ctx: RegularLambdaParameterCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.regularLambdaParameter(ctx, param)
  }
  public lambdaParameterType(ctx: LambdaParameterTypeCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.lambdaParameterType(ctx, param)
  }
  public conciseLambdaParameter(ctx: ConciseLambdaParameterCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.conciseLambdaParameter(ctx, param)
  }
  public lambdaBody(ctx: LambdaBodyCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.lambdaBody(ctx, param)
  }
  public conditionalExpression(ctx: ConditionalExpressionCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.conditionalExpression(ctx, param)
  }
  public binaryExpression(ctx: BinaryExpressionCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.binaryExpression(ctx, param)
  }
  public unaryExpression(ctx: UnaryExpressionCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.unaryExpression(ctx, param)
  }
  public unaryExpressionNotPlusMinus(ctx: UnaryExpressionNotPlusMinusCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.unaryExpressionNotPlusMinus(ctx, param)
  }
  public primary(ctx: PrimaryCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.primary(ctx, param)
  }
  public primaryPrefix(ctx: PrimaryPrefixCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.primaryPrefix(ctx, param)
  }
  public primarySuffix(ctx: PrimarySuffixCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.primarySuffix(ctx, param)
  }
  public fqnOrRefType(ctx: FqnOrRefTypeCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.fqnOrRefType(ctx, param)
  }
  public fqnOrRefTypePartRest(ctx: FqnOrRefTypePartRestCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.fqnOrRefTypePartRest(ctx, param)
  }
  public fqnOrRefTypePartCommon(ctx: FqnOrRefTypePartCommonCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.fqnOrRefTypePartCommon(ctx, param)
  }
  public fqnOrRefTypePartFirst(ctx: FqnOrRefTypePartFirstCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.fqnOrRefTypePartFirst(ctx, param)
  }
  public parenthesisExpression(ctx: ParenthesisExpressionCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.parenthesisExpression(ctx, param)
  }
  public castExpression(ctx: CastExpressionCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.castExpression(ctx, param)
  }
  public primitiveCastExpression(ctx: PrimitiveCastExpressionCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.primitiveCastExpression(ctx, param)
  }
  public referenceTypeCastExpression(ctx: ReferenceTypeCastExpressionCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.referenceTypeCastExpression(ctx, param)
  }
  public newExpression(ctx: NewExpressionCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.newExpression(ctx, param)
  }
  public unqualifiedClassInstanceCreationExpression(
    ctx: UnqualifiedClassInstanceCreationExpressionCtx,
    param?: any,
  ): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.unqualifiedClassInstanceCreationExpression(ctx, param)
  }
  public classOrInterfaceTypeToInstantiate(
    ctx: ClassOrInterfaceTypeToInstantiateCtx,
    param?: any,
  ): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.classOrInterfaceTypeToInstantiate(ctx, param)
  }
  public typeArgumentsOrDiamond(ctx: TypeArgumentsOrDiamondCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.typeArgumentsOrDiamond(ctx, param)
  }
  public diamond(ctx: DiamondCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.diamond(ctx, param)
  }
  public methodInvocationSuffix(ctx: MethodInvocationSuffixCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.methodInvocationSuffix(ctx, param)
  }
  public argumentList(ctx: ArgumentListCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.argumentList(ctx, param)
  }
  public arrayCreationExpression(ctx: ArrayCreationExpressionCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.arrayCreationExpression(ctx, param)
  }
  public arrayCreationExpressionWithoutInitializerSuffix(
    ctx: ArrayCreationExpressionWithoutInitializerSuffixCtx,
    param?: any,
  ): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.arrayCreationExpressionWithoutInitializerSuffix(ctx, param)
  }
  public arrayCreationWithInitializerSuffix(
    ctx: ArrayCreationWithInitializerSuffixCtx,
    param?: any,
  ): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.arrayCreationWithInitializerSuffix(ctx, param)
  }
  public dimExprs(ctx: DimExprsCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.dimExprs(ctx, param)
  }
  public dimExpr(ctx: DimExprCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.dimExpr(ctx, param)
  }
  public classLiteralSuffix(ctx: ClassLiteralSuffixCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.classLiteralSuffix(ctx, param)
  }
  public arrayAccessSuffix(ctx: ArrayAccessSuffixCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.arrayAccessSuffix(ctx, param)
  }
  public methodReferenceSuffix(ctx: MethodReferenceSuffixCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.methodReferenceSuffix(ctx, param)
  }
  public templateArgument(ctx: TemplateArgumentCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.templateArgument(ctx, param)
  }
  public template(ctx: TemplateCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.template(ctx, param)
  }
  public stringTemplate(ctx: StringTemplateCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.stringTemplate(ctx, param)
  }
  public textBlockTemplate(ctx: TextBlockTemplateCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.textBlockTemplate(ctx, param)
  }
  public embeddedExpression(ctx: EmbeddedExpressionCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.embeddedExpression(ctx, param)
  }
  public pattern(ctx: PatternCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.pattern(ctx, param)
  }
  public typePattern(ctx: TypePatternCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.typePattern(ctx, param)
  }
  public recordPattern(ctx: RecordPatternCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.recordPattern(ctx, param)
  }
  public componentPatternList(ctx: ComponentPatternListCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.componentPatternList(ctx, param)
  }
  public componentPattern(ctx: ComponentPatternCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.componentPattern(ctx, param)
  }
  public matchAllPattern(ctx: MatchAllPatternCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.matchAllPattern(ctx, param)
  }
  public guard(ctx: GuardCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.guard(ctx, param)
  }
  public isRefTypeInMethodRef(ctx: IsRefTypeInMethodRefCtx, param?: any): any {
    storeComments(ctx, param as unknown as IToken[])
    return super.isRefTypeInMethodRef(ctx, param)
  }
}
